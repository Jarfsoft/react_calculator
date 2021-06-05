import calculate from './calculate';

describe('Calculate', () => {
  it('it test the addition of numbers', () => {
    const total = calculate({ total: '2', next: '5', operation: '+' }, '=');
    expect(total).toEqual({ total: '7', next: null, operation: null });
  });

  it('it test the substract of numbers', () => {
    const total = calculate({ total: '8', next: '5', operation: '-' }, '=');
    expect(total).toEqual({ total: '3', next: null, operation: null });
  });

  it('it test the divide of numbers', () => {
    const total = calculate({ total: '10', next: '2', operation: '÷' }, '=');
    expect(total).toEqual({ total: '5', next: null, operation: null });
  });

  it('it test multiply the numbers', () => {
    const total = calculate({ total: '2', next: '5', operation: 'X' }, '=');
    expect(total).toEqual({ total: '10', next: null, operation: null });
  });

  it('it converts to a negative number', () => {
    const total = calculate({ total: null, next: '10', operation: null }, '+/-');
    expect(total).toEqual({ total: null, next: -10, operation: null });
  });

  it('it converts to a positive number', () => {
    const total = calculate({ total: null, next: '-1', operation: null }, '+/-');
    expect(total).toEqual({ total: null, next: 1, operation: null });
  });

  it('ir clear all the display', () => {
    const total = calculate({ total: '1333', next: '1330', operation: '+' }, 'AC');
    expect(total).toEqual({ total: null, next: null, operation: null });
  });

  it('it convert the number into a percent number', () => {
    const total = calculate({ total: null, next: '40', operation: null }, '%');
    expect(total).toEqual({ total: null, next: '40', operation: null });
  });
});
