import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { modThree } from './util/FSM';


test('Testing for 110 output should be S0=0', () => {
  const actualOutput = modThree("110");
  const expectedOutput = 0;
  expect(actualOutput.value).toEqual(expectedOutput);
});

test('Testing for 1010 output should be S1=1', () => {
  const actualOutput = modThree("1010");
  const expectedOutput = 1;
  expect(actualOutput.value).toEqual(expectedOutput);
});

test('Testing for non binary input should show error', () => {
  render(<App />);
  const input = screen.getByLabelText('binary-input');
  fireEvent.change(input, { target: { value: '123' } });
  expect(screen.getByText(/Wrong input entered/)).toBeInTheDocument();
});

test('Testing if on Change of input text, state and its value is recalculated', () => {
  render(<App />);
  const input = screen.getByLabelText('binary-input');
  fireEvent.change(input, { target: { value: '1010' } });
  expect(screen.getByText(/Output for state: S1 = 1/)).toBeInTheDocument();
  fireEvent.change(input, { target: { value: '101' } });
  expect(screen.getByText(/Output for state: S2 = 2/)).toBeInTheDocument();
});


