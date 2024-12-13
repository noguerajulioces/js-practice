export const calculatePayment = (amount, interest, duration) => {
  if (!amount || !interest || !duration) return '0.00';
  const cleanAmount = parseFloat(amount);
  const cleanInterest = parseFloat(interest) / 100 / 12; // Tasa mensual
  const cleanDuration = parseInt(duration, 10);

  if (cleanInterest === 0) {
    return (cleanAmount / cleanDuration).toFixed(2); // Sin interés
  }

  return ((cleanAmount * cleanInterest) / (1 - Math.pow(1 + cleanInterest, -cleanDuration))).toFixed(2);
};

export const totalToPay = (amount, duration) => {
  if (!amount || !duration) return '0.00';
  const cleanAmount = parseFloat(amount.replace(/,/g, ''));
  const cleanDuration = parseInt(duration.replace(/,/g, ''));
  const total = cleanAmount * cleanDuration;
  return total;
}

export const getFees = (payment, amount, duration) => {
  if (!payment || !amount || !duration) return 0; // Validar entradas
  return parseFloat(payment) - parseFloat(amount); // Ejemplo
};

export const getCapital = (amount) => {
  if (!amount) return 0;
  return parseFloat(amount);
};


export const formatNumber = (value) => {
  // Elimina cualquier separación anterior
  const numericValue = value.replace(/,/g, '');

  // Formatea el número con separador de miles
  return new Intl.NumberFormat('en-US').format(numericValue);
};

export const formatCurrency = (value) => {
  if (!value || isNaN(value)) return '0.00';
  return parseFloat(value).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });
};

export const validateValue = (value) => {
  return value && !isNaN(value) ? parseFloat(value) : 0;
};

export const formatPercentage = (value) => {
  if (isNaN(value)) return '0%'; // Validar que sea un número
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 2, // Cantidad mínima de decimales
    maximumFractionDigits: 2, // Cantidad máxima de decimales
  }).format(value / 100); // Dividir por 100 para convertir a formato porcentual
};
