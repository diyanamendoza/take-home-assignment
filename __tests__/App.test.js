import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

it('should convert to the user input to lowercase text', async () => {
  render(<App />);

  const input = screen.getByLabelText(/text to be converted:/i);
  const submitBtn = screen.getByRole('button', { name: 'Submit' });
  const output = screen.getByLabelText(/converted text:/i);

  userEvent.type(input, 'HEY');
  userEvent.click(submitBtn);

  await screen.findByText('hey');
  expect(output).toBe('hey');
});
