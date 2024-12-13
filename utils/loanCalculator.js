/**
 * Calculates the monthly payment for a loan.
 * @param {number} amount - The loan amount.
 * @param {number} interest - The annual interest rate (as a percentage).
 * @param {number} duration - The loan duration in months.
 * @returns {string} - The formatted monthly payment, rounded to two decimal places.
 */
export const calculatePayment = (amount, interest, duration) => {
  if (!amount || !interest || !duration) return '0.00';

  const cleanAmount = parseFloat(amount);
  const cleanInterest = parseFloat(interest) / 100 / 12; // Monthly interest rate
  const cleanDuration = parseInt(duration, 10);

  if (cleanInterest === 0) {
    return (cleanAmount / cleanDuration).toFixed(2); // No interest scenario
  }

  return (
    (cleanAmount * cleanInterest) / (1 - Math.pow(1 + cleanInterest, -cleanDuration))
  ).toFixed(2);
};

/**
 * Calculates the total amount to pay over the loan duration.
 * @param {string|number} amount - The loan amount.
 * @param {string|number} duration - The loan duration in months.
 * @returns {string} - The total amount formatted to two decimal places.
 */
export const totalToPay = (amount, duration) => {
  if (!amount || !duration) return '0.00';

  const cleanAmount = parseFloat(amount.toString().replace(/,/g, ''));
  const cleanDuration = parseInt(duration.toString().replace(/,/g, ''), 10);
  const total = cleanAmount * cleanDuration;

  return total.toFixed(2);
};

/**
 * Calculates the total fees paid over the loan duration.
 * @param {number} payment - The monthly payment.
 * @param {number} amount - The loan amount.
 * @param {number} duration - The loan duration in months.
 * @returns {number} - The total fees paid.
 */
export const getFees = (payment, amount, duration) => {
  if (!payment || !amount || !duration) return 0;

  const totalPaid = payment * duration;
  return parseFloat(totalPaid - amount);
};

/**
 * Retrieves the capital amount (loan principal).
 * @param {number|string} amount - The loan amount.
 * @returns {number} - The capital amount.
 */
export const getCapital = (amount) => {
  if (!amount) return 0;

  return parseFloat(amount);
};

/**
 * Formats a number with thousand separators.
 * @param {string} value - The number to format.
 * @returns {string} - The formatted number.
 */
export const formatNumber = (value) => {
  const numericValue = value.replace(/,/g, '');
  return new Intl.NumberFormat('en-US').format(numericValue);
};

/**
 * Formats a number as a currency in USD.
 * @param {number|string} value - The value to format.
 * @returns {string} - The formatted currency value.
 */
export const formatCurrency = (value) => {
  if (!value || isNaN(value)) return '0.00';

  return parseFloat(value).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });
};

/**
 * Validates and parses a value as a number.
 * @param {any} value - The value to validate and parse.
 * @returns {number} - The parsed number, or 0 if invalid.
 */
export const validateValue = (value) => {
  return value && !isNaN(value) ? parseFloat(value) : 0;
};

/**
 * Formats a number as a percentage.
 * @param {number} value - The value to format as a percentage.
 * @returns {string} - The formatted percentage.
 */
export const formatPercentage = (value) => {
  if (isNaN(value)) return '0%';

  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value / 100);
};
