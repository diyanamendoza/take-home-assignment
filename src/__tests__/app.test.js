import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import App from '../App';

it('should convert the user input to lowercase text', async () => {
  render(<App />);

  const input = screen.getByLabelText(/text to be converted:/i);
  const submitBtn = screen.getByRole('button', { name: 'Submit' });

  userEvent.type(input, ' HEY');
  userEvent.click(submitBtn);

  await screen.findByText('here is some example text. hey');
});

it('should convert the user input to uppercase text', async () => {
  render(<App />);

  const input = screen.getByLabelText(/text to be converted:/i);
  const radio = screen.getByLabelText(/convert text to uppercase/i);
  const submitBtn = screen.getByRole('button', { name: 'Submit' });

  userEvent.type(input, ' aloha');
  userEvent.click(radio);
  userEvent.click(submitBtn);

  await screen.findByText('HERE IS SOME EXAMPLE TEXT. ALOHA');
});
