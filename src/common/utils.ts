export const formatCurrency = (amount: number, locale: string = 'en-US', currency: string = 'USD'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);
}

export const shuffleArray = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export const debounce = <T extends (...args: any[]) => void>(func: T, timeout = 500) => {
  let timer: number | NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    console.log('ARGS =>', args);
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), timeout);
  };
};