// document.getElementById('new-store-btn').addEventListener('click', showForm());
// var yesbtn = document.getElementById('yes-button');

// function showForm() {
//   var form = document.getElementById('newStoreForm');
//   if (form.style.display === 'none') {
//     form.style.display = 'inline';
//   } else {
//     preventPropagation();
//     // form.style.display = 'none';
//     return;
//   }
// }

// function balanceInput(event) {
//   // event.preventDefault();
//   var balance = document.getElementById('giftcard-balance');
//   if (balance.style.display === 'none') {
//     balance.style.dispay = 'inline';
//   } else {
//     // balance.style.display = 'none';
//     return;
//     // preventDefault();
//   }
// }

const newStoreBtn = document.getElementById('new-store-btn');
newStoreBtn.addEventListener('click', showForm());

const storeForm = document.getElementById('newStoreForm');
storeForm.hidden = true;

const gcBal = document.getElementById('giftcard-balance');
gcBal.hidden = true;

function showForm() {
  storeForm.hidden = false;
}

function balanceInput() {
  gcBal.hidden = false;
  storeForm.hidden = false;
  preventDefault();
}

function stayHidden() {
  preventPropagation();
  gcBal.hidden = true;
  storeForm.hidden = true;
}
