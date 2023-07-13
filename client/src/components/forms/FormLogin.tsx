import React from 'react';
import * as Yup from 'yup';
import { FcGoogle } from 'react-icons/fc';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SignInWithEmail, SignInWithGoogle, errorHandler } from '../../firebase/auth';
import { context } from '../../context/Context';
import { createUser } from '../../firebase/User';
import ErrorSign from '../errors/ErrorSign';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Debe ingresar un email válido')
    .required('El email es requerido'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es requerida'),
});

export default function FormLogin() {

  const [error, setError] = React.useState<boolean | string>(false)

  const handlerSignInWithGoogle = async () => {
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
  const handlerSignIn = async (email:string, password:string) => {
    SignInWithEmail(email, password).catch(err => {
      setError(errorHandler(err))
    })
  }
  

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setError(false)
        handlerSignIn(values.email, values.password)
        setSubmitting(false)
        resetForm()
      }}
    >
      {({ isSubmitting }) => (
        <>
        <ErrorSign validation={error} />
        <Form>
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

          <div className='flex justify-center my-8 gap-6'>
            <button 
              type="submit"
              className=" bg-neutral-900 text-white  py-2 px-6 rounded-lg shadow-lg"
              disabled={isSubmitting}
            >
              Iniciar Sesión
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
