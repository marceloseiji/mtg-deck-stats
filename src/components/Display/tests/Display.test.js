import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Display from '../index'
import DisplayNumbers from '../../DisplayNumbers/index'
import DisplayControls from '../../DisplayControls/index'

jest.mock('../../DisplayNumbers/index', () => () => 'DisplayNumbers')
jest.mock('../../DisplayControls/index', () => () => 'DisplayControls')

test.only('Render Display with correct text', () => {
  render(<Display />)
  expect(screen.getByText(/QUAL É O NÚMERO?/i))
})
