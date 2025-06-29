export function isValidGiftCode(code, demoCodes) {
  return demoCodes.map(c => c.toUpperCase()).includes(code.trim().toUpperCase());
} 