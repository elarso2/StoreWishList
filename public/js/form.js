function showForm() {
  var form = document.getElementById('newStoreForm');
  if (form.style.display === 'none') {
    form.style.display = 'inline';
  } else {
    form.style.display = 'none';
  }
}

function balanceInput() {
  var balance = document.getElementById('giftcard-balance');
  if (balance.style.display === 'none') {
    balance.style.dispay = 'inline';
  } else {
    // balance.style.display = 'none';
    return;
  }
}
