import React from 'react'
import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from '../App'

test('Aplicación se renderiza correctamente', () => {
  render(<App />)
  expect(screen).toBeDefined()
})
