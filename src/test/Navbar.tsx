import { test, describe, beforeEach, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Navbar from "../components/layout/Navbar";
import Providers from "../Providers";



describe('Navbar de Navegación', () => {

  beforeEach(() => {
    render(
      <Providers>
        <Navbar />
      </Providers>
    )
  })

  test('Logo "Antojistos Frit en pantalla"', () => {
    expect(screen.queryByText(/antojitos frit/i)).tobe(null);
  })

  test('Deben Existir solo tres (3) elementos en la lista de navegación', () => {
    const elements = screen.queryAllByRole('listitem')
    expect(elements).toBe(null)
    // expect(elements.length).toBe(3)
  })

  test('Botón "Sign Up"', () => {
    const button = screen.queryByRole('button', {
      name: /sign up/i
    })
    expect(button).toBe(null)
  })

  test('Botón "Sign In"', () => {
    const button = screen.queryByRole('button', {
      name: /sign in/i
    })
    expect(button).toBe(null)
  })

})