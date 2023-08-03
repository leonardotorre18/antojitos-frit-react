import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import ErrorSign from '../errors/ErrorSign';
import ErrorInput from '../errors/ErrorInput';
import { Product } from '../../types';
import { uploadImage } from '../../firebase/images';
import { context } from '../../context/Context';
import { RefreshProducts } from '../../services';


export default function FormProduct() {
  
  const [error, setError] = React.useState<boolean | string>(false)
  const [image, setImage] = React.useState<null | File>(null)
  const { dispatch } = React.useContext(context)
  
  const validationSchema = Yup.object().shape({
  
    title: Yup.string()
      .min(6, 'El título tiene que tener al menos 6 caracteres')
      .max(30, 'El título no puede tener más de 30 caracteres')
      .required('Debe especificar un título'),
    subtitle: Yup.string()
      .min(6, 'El subtítulo tiene que tener al menos 6 caracteres')
      .max(30, 'El subtítulo no puede tener más de 30 caracteres')
      .required('Debe especificar un subtítulo'),
    description: Yup.string()
      .min(10, 'El descripción tiene que tener al menos 10 caracteres')
      .max(300, 'El descripción no puede tener más de 300 caracteres')
      .required('Debe especificar una descripción'),
    price: Yup.number()
      .min(1, 'Debes especificar un precio')
      .required('Debes especificar un precio'),
    image: Yup.mixed().required('Por favor, selecciona un archivo')
      .test('es-imagen', 'El archivo debe ser una imagen', () => {
        if (image) {
          return image && ['image/jpeg', 'image/png', 'image/gif'].includes(image.type);
        }
        return true;
      })


  });

  

  return (
    <Formik
      initialValues={{ 
        title: '', 
        subtitle: '', 
        description: '', 
        price: 0, 
        image: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setError(false)


        image && await uploadImage({
          title: values.title,
          subtitle:values.subtitle,
          description: values.description,
          price: values.price,
          image
        })
        RefreshProducts(dispatch)

        setSubmitting(false)
        resetForm()
      }}
    >
      {({ isSubmitting, errors, touched, setFieldValue }) => (
        <>
        <ErrorSign validation={error} />
        <Form>



          <label htmlFor="title" className='flex flex-col w-full mt-4'>
            <Field
              type="text"
              name="title"
              className='outline-none border-gray-300 rounded-xl border-2 shadow-xl text-base py-2 px-5'
              placeholder='Título'
            />
            { errors.title && touched.title ? <ErrorInput message={errors.title} /> : <></> }
                  
          </label>




          <label htmlFor="subtitle" className='flex flex-col w-full mt-4'>
            <Field
              type="text"
              name="subtitle"
              className='outline-none border-gray-300 rounded-xl border-2 shadow-xl text-base py-2 px-5'
              placeholder='Subtítulo'
            />
            { errors.subtitle && touched.subtitle ? <ErrorInput message={errors.subtitle} /> : <></> }
          </label>


          <label htmlFor="description" className='flex flex-col w-full mt-4'>
            <Field
              as="textarea"
              name="description"
              className='outline-none border-gray-300 rounded-xl border-2 shadow-xl text-base py-2 px-5'
              placeholder='Descripción'
            />
            { errors.description && touched.description ? <ErrorInput message={errors.description} /> : <></> }
          </label>



          <label htmlFor="image" className='flex flex-col w-full mt-4'>
            <Field
              type="file"
              name="image"
              className='outline-none border-gray-300 rounded-xl border-2 shadow-xl text-base py-2 px-5'
              placeholder='Imagen'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const file = event.target.files?.[0];
                if (file) {
                  setImage(file)
                  setFieldValue('image', event.target.value)
                }
              }}
            />
            { errors.image && touched.image ? <ErrorInput message={errors.image} /> : <></> }
          </label>


          <label htmlFor="price" className='flex flex-col w-full mt-4'>
            <Field
              type="number"
              name="price"
              className='outline-none border-gray-300 rounded-xl border-2 shadow-xl text-base py-2 px-5'
              placeholder='Precio'
            />
            { errors.price && touched.price ? <ErrorInput message={errors.price} /> : <></> }
          </label>


          <div className='flex justify-center my-8 gap-6'>
            <button 
              type="submit"
              className=" bg-neutral-900 text-white  py-2 px-6 rounded-lg shadow-lg"
              disabled={isSubmitting}
            >
              Iniciar Sesión
            </button>

          </div>
        </Form>
        </>
      )} 
    </Formik>
  )
}
