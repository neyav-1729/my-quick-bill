function calculateValues() {
  const quantity = parseFloat(document.getElementById('quantity').value) || 0;
  const rate = parseFloat(document.getElementById('rate').value) || 0;
  const price = quantity * rate;
  const gst = price * 0.18;
  const totalPrice = price + gst;

  document.getElementById('price').value = price.toFixed(2);
  document.getElementById('gst').value = gst.toFixed(2);
  document.getElementById('totalPrice').value = totalPrice.toFixed(2);
}

function printForm() {
  window.print();
}