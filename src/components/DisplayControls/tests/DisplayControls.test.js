import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import DisplayControls from '../index'
import { NumbersContext } from '../../../contexts/NumbersContext'

test('Should render input with placeholder with correct text', () => {
  render(<DisplayControls />)

  const input = screen.getByPlaceholderText('Digite o palpite')
  expect(input).toBeInTheDocument()
})

test('Should render disabled button with text Enviar', () => {
  render(<DisplayControls />)

  const button = screen.getByRole('button', { name: 'ENVIAR' })
  expect(button).toBeDisabled()
})

test('Validate value typed to input', async () => {
  render(<DisplayControls />)

  const input = screen.getByPlaceholderText('Digite o palpite')
  await waitFor(() => userEvent.type(input, '123'))
  await waitFor(() => expect(input.value).toBe('123'))
})

test('After user enters a value button should be enabled', async () => {
  render(<DisplayControls />)

  const button = screen.getByRole('button', { name: 'ENVIAR' })
  const input = screen.getByPlaceholderText('Digite o palpite')

  await waitFor(() => userEvent.type(input, '123'))
  await waitFor(() => expect(button).toBeEnabled())
})

test('After user click button to send a value, input should be cleared', async () => {
  render(
    <NumbersContext.Provider value={{ handleUserNumber: jest.fn() }}>
      <DisplayControls />
    </NumbersContext.Provider>
  )

  const button = screen.getByRole('button', { name: 'ENVIAR' })
  const input = screen.getByPlaceholderText('Digite o palpite')

  await waitFor(() => userEvent.type(input, '123'))
  await waitFor(() => expect(button).toBeEnabled())
  await waitFor(() => userEvent.click(button))
  await waitFor(() => expect(input.value).toBe(''))
})

test('Reset game button should not be on start screen', async () => {
  render(<DisplayControls />)

  const resetButton = screen.queryByRole('button', { name: 'NOVA PARTIDA' })
  expect(resetButton).not.toBeInTheDocument()
})

test('Reset button should appear after context change', async () => {
  render(
    <NumbersContext.Provider value={{ resetVisibility: true }}>
      <DisplayControls />
    </NumbersContext.Provider>
  )

  const resetButton = screen.getByRole('button', { name: 'NOVA PARTIDA' })
  expect(resetButton).toBeInTheDocument()
})
