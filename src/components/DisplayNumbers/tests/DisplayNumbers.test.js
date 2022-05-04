import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import DisplayNumbers from '../index'
import { NumbersContext } from '../../../contexts/NumbersContext'

test('should render Display led mapped', () => {
  render(
    <NumbersContext.Provider
      value={{
        message: { text: 'É maior', color: 'message_warning' },
        numberMap: [1]
      }}
    >
      <DisplayNumbers />
    </NumbersContext.Provider>
  )
  const led1 = screen.getByTestId('led1')
  expect(led1).toBeInTheDocument()
})

test('should show a messagem in screen', () => {
  render(
    <NumbersContext.Provider
      value={{
        message: { text: 'É maior', color: 'message_warning' },
        numberMap: [1]
      }}
    >
      <DisplayNumbers />
    </NumbersContext.Provider>
  )
  const message = screen.getByText('É maior')
  expect(message).toBeInTheDocument()
})
