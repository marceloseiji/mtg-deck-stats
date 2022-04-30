import React from 'react'
import { screen } from '@testing-library/dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ComponentTest from './index'

test('should render ComponentTest', () => {
    render(<ComponentTest />)
    expect(screen.getByText('Studio Sol - Numbers')).toBeInTheDocument()
})