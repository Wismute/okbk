function formatNumber(number) {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ');
}

function calculate() {
  const price = parseFloat(document.getElementById('price').value);
  const downPayment = parseFloat(document.getElementById('downPayment').value);
  const installment = parseFloat(document.getElementById('installment').value);
  const term = parseInt(document.getElementById('term').value);

  if (isNaN(price) || isNaN(downPayment) || isNaN(installment) || isNaN(term)) {
    alert('Пожалуйста, введите корректные значения.');
    return;
  }

  const totalAmount = price + (installment * term * 0.05);
  const formattedTotalAmount = formatNumber(totalAmount);
  const result = `Итоговая стоимость: ${formattedTotalAmount} руб.`;

  document.getElementById('result').innerText = result;
}

document.getElementById('installmentSlider').addEventListener('input', function () {
    let price = document.getElementById('price').value;
    document.getElementById('installment').value = this.value;
    document.getElementById('downPayment').value = price - this.value;
});