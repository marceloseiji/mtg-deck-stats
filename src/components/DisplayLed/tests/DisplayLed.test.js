import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import DisplayLed from '../index'
import { NumbersContext } from '../../../contexts/NumbersContext'

test('Led 1 should have class displayLed__on, led 7 should have class displayLed__off', () => {
  render(
    <NumbersContext.Provider
      value={{ message: { text: 'É maior', color: 'message_warning' } }}
    >
      <DisplayLed showNumber={0} />
    </NumbersContext.Provider>
  )

  const led1 = screen.getByTestId('led1')
  expect(led1).toHaveClass('displayLed__on')

  const led7 = screen.getByTestId('led7')
  expect(led7).toHaveClass('displayLed__off')
})

test('Led color success', () => {
  render(
    <NumbersContext.Provider
      value={{ message: { text: 'Você acertou!!!', color: 'message_success' } }}
    >
      <DisplayLed showNumber={0} />
    </NumbersContext.Provider>
  )

  const led1 = screen.getByTestId('led1')
  expect(led1).toHaveClass('displayLed__on__success')
})

test('Led color error', () => {
  render(
    <NumbersContext.Provider
      value={{ message: { text: 'Erro', color: 'message_error' } }}
    >
      <DisplayLed showNumber={0} />
    </NumbersContext.Provider>
  )

  const led1 = screen.getByTestId('led1')
  expect(led1).toHaveClass('displayLed__on__error')
})

