const formatValue = (value: number): string =>
  Intl.NumberFormat('pt', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(value);

export default formatValue;
