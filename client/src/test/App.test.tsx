import React from 'react'
import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from '../App'
import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux'
import applicationStore from '../store'

test('Aplicación se renderiza correctamente', () => {
  const mockStore = configureStore();
  const store = mockStore(applicationStore.getState())
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  expect(screen).toBeDefined()
})
