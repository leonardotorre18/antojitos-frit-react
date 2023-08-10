
import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from '../App'
import Providers from '../Providers';

test('Aplicación se renderiza correctamente', () => {
  render(
    <Providers>
      <App />
    </Providers>
  )
  expect(screen).toBeDefined()
})
