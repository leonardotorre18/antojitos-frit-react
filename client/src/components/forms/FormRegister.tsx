
import { FcGoogle } from 'react-icons/fc';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { SignInWithGoogle, SignUpWithEmail, errorHandler } from '../../firebase/auth';
import React from 'react';
import { createUser } from '../../firebase/User';
import { getAuth, signOut } from 'firebase/auth';
import { signUp } from '../../context/actions/User';
import { context } from '../../context/Context';
// import { context } from '../../context/Context';
// import { signIn } from '../../context/actions/User';

const validationSchema = Yup.object().shape({
  name: Yup.string()
  .min(3, "El nombre es muy corto")
  .max(30, "El nombre es muy largo")
  .required("El nombre es requerido"),
  email: Yup.string()
    .email('Debe ingresar un email válido')
    .required('El email es requerido'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
      'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.'
    )
    .required('La contraseña es requerida'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Las contraseñas no coinciden')
});

export default function FormRegister() {
  const [error, setError] = React.useState<boolean | string>(false)
  

  const handlerSignInWithGoogle = () => {
    SignInWithGoogle().then(credential => {
      const user = credential.user
      createUser({
        name: user.displayName,
        email: user.email,
        num: 1,
        id: user.uid
      })

    })
  }

  const handlerSignUp = async (email: string, password: string, name: string) => {
    SignUpWithEmail(email, password).then(credential => {
      createUser({
        name: name,
        email: email,
        num: 1,
        id: credential.user.uid
      })
    })
  }
  
  return (
    <Formik
      initialValues={{ email: '', password: '', name: '', confirmPassword: '' }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        handlerSignUp(values.email, values.password, values.name)
        setSubmitting(false)
        resetForm()
      }}
    >
      {({ isSubmitting }) => (
        <>
        {
          error ? <p className='w-fit bg-red-600 text-white rounded-lg mx-auto py-1 px-6'>{error}</p>
          : <></>
        }
        <Form>
          <label htmlFor="name" className='flex flex-col w-full mt-4'>
            <Field
              type="name"
              name="name"
              className='outline-none border-gray-300 rounded-xl border-2 shadow-xl text-base py-2 px-5'
              placeholder='Nombre'
            />
            <ErrorMessage name="name" component="div" />
                  
          </label>

          <label htmlFor="email" className='flex flex-col w-full mt-4'>
            <Field
              type="email"
              name="email"
              className='outline-none border-gray-300 rounded-xl border-2 shadow-xl text-base py-2 px-5'
              placeholder='Correo'
            />
            <ErrorMessage name="email" component="div" />
                  
          </label>

          <label htmlFor="password" className='flex flex-col w-full mt-4'>
            <Field
              type="password"
              name="password"
              className='outline-none border-gray-300 rounded-xl border-2 shadow-xl text-base py-2 px-5'
              placeholder='Contraseña'
            />
            <ErrorMessage name="password" component="div" />                  
          </label>

          <label htmlFor="confirmPassword" className='flex flex-col w-full mt-4'>
            <Field
              type="password"
              name="confirmPassword"
              className='outline-none border-gray-300 rounded-xl border-2 shadow-xl text-base py-2 px-5'
              placeholder='Confirmar Contraseña'
            />
            <ErrorMessage name="confirmPassword" component="div" />                  
          </label>

          <div className='flex justify-center my-8 gap-6'>
            <button 
              type="submit"
              className=" bg-neutral-900 text-white  py-2 px-6 rounded-lg shadow-lg"
              disabled={isSubmitting}
            >
              Registrarse
            </button>

            <button 
              type="button" 
              className='py-2 px-6 flex items-center gap-2 shadow-lg'
              onClick={handlerSignInWithGoogle}
            >
              Iniciar Sesión con Google
              <FcGoogle className='text-2xl' />
            </button>

          </div>
        </Form>
        </>
      )} 
    </Formik>
  )
}
