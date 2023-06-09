import { test, describe, beforeEach, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux'
import '@testing-library/jest-dom'
import applicationStore from '../store'
import Navbar from "../components/layout/Navbar";



describe('Navbar de Navegación', () => {

  beforeEach(() => {
    const mockStore = configureStore();
    const store = mockStore(applicationStore.getState())
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    )
  })

  test('Logo "Antojistos Frit en pantalla"', async () => {
    expect(await screen.findByText(/antojitos frit/i)).toBeInTheDocument();
  })
  test('Deben Existir solo tres (3) elementos en la lista de navegación', async () => {
    const elements = await screen.findAllByRole('listitem')
    expect(elements.length).toBe(3)
  })

  test('Botón "Sign Up"', async () => {
    const button =  await screen.findByRole('button', {
      name: /sign up/i
    })
    expect(button).toBeInTheDocument()
  })

  test('Botón "Sign In"', async () => {
    const button =  await screen.findByRole('button', {
      name: /sign in/i
    })
    expect(button).toBeInTheDocument()
  })

})