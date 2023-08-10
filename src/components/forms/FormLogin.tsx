import React from 'react';
import * as Yup from 'yup';
import { FcGoogle } from 'react-icons/fc';
import { Formik, Form, Field } from 'formik';
import { SignInWithEmail, SignInWithGoogle, errorHandler } from '../../firebase/auth';
// import { context } from '../../context/Context';
import { createUser } from '../../firebase/User';
import ErrorSign from '../errors/ErrorSign';
import ErrorInput from '../errors/ErrorInput';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { Privileges, User } from '../../context/actions/User';
import { context } from '../../context/Context';

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
  const { state } = React.useContext(context)

  const handlerSignInWithGoogle = async () => {
    SignInWithGoogle()
    .then(async (credential) => {
      const user = credential.user
      const users: User[] = [];
      await getDocs(collection(getFirestore(), 'users')).then( docs => docs.forEach( doc => {
        const data = doc.data();
        users.push({
          name: data.name,
          email: data.email,
          id: '',
          cart: [],
          privileges: data.privileges
        })
      } ))
      if (users.some(item => item.email == user.email)) {
        console.log('El usuario es existente')
      } else {
        createUser({
          name: user.displayName,
          email: user.email,
          cart: state.cart,
          id: user.uid,
          privileges: Privileges.USER
        })
      }
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
      {({ isSubmitting, errors, touched }) => (
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
            { errors.email && touched.email ? <ErrorInput message={errors.email} /> : <></> }
                  
          </label>

          <label htmlFor="password" className='flex flex-col w-full mt-4'>
            <Field
              type="password"
              name="password"
              className='outline-none border-gray-300 rounded-xl border-2 shadow-xl text-base py-2 px-5'
              placeholder='Contraseña'
            />
            { errors.password && touched.password ? <ErrorInput message={errors.password} /> : <></> }
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
