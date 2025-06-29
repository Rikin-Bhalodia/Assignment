export function maskCardNumber(number) {
  return '**** **** **** ' + number.slice(-4);
}

export function getCardExpiryString(month, year) {
  return `${month}/${year}`;
} 