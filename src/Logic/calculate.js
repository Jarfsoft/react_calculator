import operate from './operate';

const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const op = ['+', '-', 'X', '÷'];
let result;

export default function calculate(data, name) {
  result = data;
  if (num.includes(name)) {
    if (result.operation == null) result.total = result.total == null ? name : result.total + name;
    else result.next = result.next == null ? name : result.next + name;
  } else if (op.includes(name)) {
    if (result.total !== null) result.operation = name;
  } else if (name === 'AC') {
    result = {
      total: null,
      next: null,
      operation: null,
    };
  } else if (name === '%') {
    if (result.total !== null && result.next == null) {
      result.total /= 100;
      result.total.toString();
    } else if (result.total !== null && result.next !== null) {
      result.operation = name;
    }
  } else if (name === '.') {
    if (result.operation === null) {
      if (result.total == null) result.total = '0.';
      else if (!result.total.includes('.')) result.total = `${result.total}.`;
    } else if (result.next == null) result.next = '0.';
    else if (!result.next.includes('.')) result.next = `${result.next}.`;
  } else if (name === '+/-') {
    if (result.total !== null) {
      result.total *= -1;
      result.total.toString();
    }
    if (result.next !== null) {
      result.next *= -1;
      result.next.toString();
    }
  } else if (result.total !== null && result.next !== null) {
    result.total = String(operate(result.total, result.next, result.operation));
    result.next = null;
    result.operation = null;
  }
  return result;
}
