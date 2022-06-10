// document.getElementById('new-store-btn').addEventListener('click', showForm());
// var yesbtn = document.getElementById('yes-button');

function showForm(event) {
  // event.preventDefault();
  var form = document.getElementById('newStoreForm');
  if (form.style.display === 'none') {
    form.style.display = 'inline';
  } else {
    // form.style.display = 'none';
    return;
  }
}

function balanceInput(event) {
  // event.preventDefault();
  var balance = document.getElementById('giftcard-balance');
  if (balance.style.display === 'none') {
    balance.style.dispay = 'inline';
  } else {
    // balance.style.display = 'none';
    return;
    // preventDefault();
  }
}
