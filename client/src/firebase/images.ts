
import { addDoc, collection, doc, getFirestore, setDoc } from 'firebase/firestore';
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { db } from '.';
import { RefreshProducts } from '../services';


const storage = getStorage();

type Product = {
  title: string, 
  subtitle: string, 
  description: string, 
  price: number, 
  image: File,
}

export const deleteImage =async (id:string) => {
  await deleteObject(ref(storage, id))
}
export const uploadImage = async (product: Product) => {

  const imgID = `${v4()}.jpg`;
  await uploadBytes(ref(storage, imgID), product.image)

  const imgPath = await showImage(imgID)

  console.log(imgPath)

  addDoc(collection(db, 'products'), {
    title: product.title,
    subtitle: product.subtitle,
    description: product.description,
    price: product.price,
    imgPath
  })
  
}

export const showImage = async (id: string) => {
  const referent = ref(storage, id);
  const url = await getDownloadURL(referent).then(
    url => url
  )
  return url
  
}