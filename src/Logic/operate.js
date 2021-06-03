import Big from 'big.js';

export default function operate(num1, num2, operation) {
  const n1 = new Big(num1);
  const n2 = new Big(num2);

  if (operation === '+') {
    return (Number(n1) + Number(n2));
  }
  if (operation === '-') {
    return (Number(n1) - Number(n2));
  }
  if (operation === 'X') {
    return (Number(n1) * Number(n2));
  }
  if (operation === '÷') {
    return (Number(n1) / Number(n2));
  }
  if (operation === '%') {
    if (num2 !== null) return (Number(n1) + Number(n2) / 100);
    return (Number(n1) % Number(n2));
  }
  return 0;
}
