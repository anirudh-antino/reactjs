import numeral from 'numeral';

// ----------------------------------------------------------------------

export function fCurrency(number) {
  let afterPoint = '';
  let lastThree= '';
  let otherNumbers=''; 
  number=number.toString();
  if(number.indexOf('.') > 0)
     afterPoint = number.substring(number.indexOf('.'),number.length);
  number = Math.floor(number);
  number=number.toString();
  lastThree = number.substring(number.length-3);
  otherNumbers = number.substring(0,number.length-3);
  if(otherNumbers !== '')
      lastThree = `, ${lastThree}`;
  return `₹ ${otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",")} ${lastThree}${afterPoint}`;
}

export function fPercent(number) {
  return numeral(number / 100).format('0.0%');
}

export function fNumber(number) {
  return numeral(number).format();
}

export function fShortenNumber(number) {
  return numeral(number).format('0.00a').replace('.00', '');
}

export function fData(number) {
  return numeral(number).format('0.0 b');
}
