import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Calculator snapshot', () => {
  it('Calculator section is rendered', () => {
    const calculator = renderer
      .create(<App />)
      .toJSON();
    expect(calculator).toMatchSnapshot();
  });
});

describe('Calculation results', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('test adding operator', async () => {
    userEvent.click(screen.getByText('2'));
    userEvent.click(screen.getByText('5'));
    userEvent.click(screen.getByText('+'));
    userEvent.click(screen.getByText('3'));
    userEvent.click(screen.getByText('5'));
    userEvent.click(screen.getByText('='));
    const display = await screen.findByText('60');
    expect(display).toBeInTheDocument();
  });

  it('test substracting operator', async () => {
    userEvent.click(screen.getByText('2'));
    userEvent.click(screen.getByText('5'));
    userEvent.click(screen.getByText('-'));
    userEvent.click(screen.getByText('3'));
    userEvent.click(screen.getByText('5'));
    userEvent.click(screen.getByText('='));
    const display = await screen.findByText('-10');
    expect(display).toBeInTheDocument();
  });

  it('test dividing operator', async () => {
    userEvent.click(screen.getByText('5'));
    userEvent.click(screen.getByText('÷'));
    userEvent.click(screen.getByText('2'));
    userEvent.click(screen.getByText('='));
    const display = await screen.findByText('2.5');
    expect(display).toBeInTheDocument();
  });

  it('test multiplying operator', async () => {
    userEvent.click(screen.getByText('7'));
    userEvent.click(screen.getByText('X'));
    userEvent.click(screen.getByText('2'));
    userEvent.click(screen.getByText('0'));
    userEvent.click(screen.getByText('='));
    const display = await screen.findByText('140');
    expect(display).toBeInTheDocument();
  });

  it('change number to negative', async () => {
    userEvent.click(screen.getByText('6'));
    userEvent.click(screen.getByText('+/-'));
    const display = await screen.findByText('-6');
    expect(display).toBeInTheDocument();
  });

  it('change number to positive', async () => {
    userEvent.click(screen.getByText('-'));
    userEvent.click(screen.getByText('4'));
    userEvent.click(screen.getByText('+/-'));
    const display = await screen.findByText('4');
    expect(display).toBeInTheDocument();
  });

  it('turns number to porcentage', async () => {
    userEvent.click(screen.getByText('3'));
    userEvent.click(screen.getByText('%'));
    const display = await screen.findByText('0.03');
    expect(display).toBeInTheDocument();
  });

  it('wipe the screen', async () => {
    userEvent.click(screen.getByText('3'));
    userEvent.click(screen.getByText('AC'));
    expect(screen.queryByText('50')).toBeNull();
  });
});
