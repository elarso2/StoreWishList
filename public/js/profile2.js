const newStoreHandler = async (event) => {
  event.preventDefault();

  const store = document.querySelector('#store').value.trim();
  const giftcardBal = document.querySelector('#giftcard-balance').value.trim();
  const items = document.querySelector('#item').value.trim();

  if (store) {
    const response = await fetch('/api/store', {
      method: 'POST',
      body: JSON.stringify({ store }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to save store');
    }
  }

  if (giftcardBal) {
    const response = await fetch('/api/giftCards', {
      method: 'POST',
      body: JSON.stringify({ giftcardBal }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to save store');
    }
  }

  if (items) {
    const response = await fetch('/api/items', {
      method: 'POST',
      body: JSON.stringify({ items }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to save store');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/store/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete store');
    }
  }
};

document
  .querySelector('.new-store')
  .addEventListener('submit', newStoreHandler);

document
  .querySelector('.store-list')
  .addEventListener('click', delButtonHandler);
