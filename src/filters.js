import Vue from 'vue';
import moment from 'moment';

/* eslint-disable consistent-return */

Vue.filter('daysLeft', (value) => {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  return Math.round(Math.abs(Date.parse(value) - Date.now()) / (oneDay));
});

Vue.filter('timestampToDateInput', (value) => {
  if (value && value !== 0) {
    return moment(Number(value)).format('YYYY-MM-DD');
  }
});

Vue.filter('dateInputToTimestamp', value => new Date(value).getTime());

Vue.filter('monthDay', (value) => {
  if (value) {
    return moment(Number(value)).format('MM/DD');
  }
});

Vue.filter('fullDate', (value) => {
  if (value && value !== 0) {
    return moment(Number(value)).format('MMMM Do, YYYY hh:mm A zz');
  }
  return 'Invalid date';
});

Vue.filter('price', (value) => {
  // An amount of money is stored on backend in the smallest sub-division of the currency, eg: 1$ = 100
  const price = value / 100;
  const val = (price / 1).toFixed(2).replace('.', ',');
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
});

Vue.filter('currencySymbol', (value) => {
  switch (value) {
    case 'GBP': {
      return '£';
    }
    case 'USD': {
      return '$';
    }
    case 'EUR': {
      return '€';
    }
    case 'PLN': {
      return 'PLN';
    }
    default: {
      return '';
    }
  }
});

Vue.filter('truncate', (text, lengthParam, clampParam) => {
  const clamp = clampParam || '...';
  const length = lengthParam || 30;
  if (text.length <= length) return text;
  let truncatedText = text.slice(0, length - clamp.length);
  let last = truncatedText.length - 1;
  while (last > 0 && truncatedText[last] !== ' ' && truncatedText[last] !== clamp[0]) last -= 1;
  // Fix for case when text dont have any `space`
  last = last || length - clamp.length;
  truncatedText = truncatedText.slice(0, last);
  return truncatedText + clamp;
});

export default {};
/* eslint-enable consistent-return */
