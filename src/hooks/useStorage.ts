// import React from 'react'

// export default function useStorage<T>(initialValue: T, key: string) {

//   const [ state, setState ] = React.useState<T>(initialValue)

//   const setStorage = (newValue: T) => {
//     localStorage.setItem(key, JSON.stringify(newValue))
//     setState(newValue)
//   }

//   React.useEffect(() => {
//     const result = localStorage.getItem(key)
//     if(result) setState(JSON.parse(result))
//     // else setStorage(initialValue)

//   }, [state])


//   return [state, setState]
// }
import { useState, useEffect } from "react";

function useStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  
  const [value, setValue] = useState(() => {
    const storageValue = localStorage.getItem(key);
    return storageValue !== null ? JSON.parse(storageValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const setStorageValue = (value: T) => setValue(value);

  return [value, setStorageValue];
}

export default useStorage;