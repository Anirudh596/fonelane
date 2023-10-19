import NumberFormat from 'format-number';

function FormatNumber({ number }) {
    const formattedNumber = NumberFormat(number, {
        groupingSeparator: ',',
        thousandSeparator: '.',
      });
  return <span>{formattedNumber}</span>
}

export default FormatNumber


