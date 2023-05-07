import { render, screen } from '@testing-library/react'
import Test from '../pages/Test'
import '@testing-library/jest-dom';

describe('Test', () => {
  it('renders a heading', () => {
    render(<Test />)

    // const elm = screen.getByText(/test/i)

    const heading = screen.getByRole('heading', {
      name: /test/i,
    });

    expect(heading).toBeInTheDocument();
  })
})