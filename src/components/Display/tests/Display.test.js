import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Display from '../index'

test('Render Display with correct text', () => {
  render(<Display />)

  expect(screen.getByText(/QUAL É O NÚMERO?/i))
})
