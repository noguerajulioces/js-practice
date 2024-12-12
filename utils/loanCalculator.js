// loanCalculator.js

/**
 * Calcula el pago mensual de un préstamo.
 * @param {number} amount - Cantidad del préstamo.
 * @param {number} interest - Tasa de interés anual en porcentaje.
 * @param {number} duration - Duración del préstamo en meses.
 * @returns {string} - El pago mensual formateado con dos decimales.
 */
export const calculatePayment = (amount, interest, duration) => {
  if (!amount || !interest || !duration) return '0.00';

  // Eliminar comas de los valores
  const cleanAmount = parseFloat(amount.replace(/,/g, ''));
  const cleanInterest = parseFloat(interest.replace(/,/g, ''));
  const cleanDuration = parseInt(duration.replace(/,/g, ''), 10);

  // Realizar el cálculo
  const rate = cleanInterest / 100 / 12; // Tasa mensual
  return ((cleanAmount * rate) / (1 - Math.pow(1 + rate, -cleanDuration))).toFixed(2);
};

export const formatNumber = (value) => {
  // Elimina cualquier separación anterior
  const numericValue = value.replace(/,/g, '');

  // Formatea el número con separador de miles
  return new Intl.NumberFormat('en-US').format(numericValue);
};

export const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD', // Cambia a tu moneda, por ejemplo 'EUR', 'PYG', etc.
    minimumFractionDigits: 2,
  }).format(value);
};
