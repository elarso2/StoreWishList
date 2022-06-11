const newStoreHandler = async (event) => {
  event.preventDefault();

  const store_name = document.querySelector('#store').value.trim();
  const gc_balance = document.querySelector('#giftcard-balance').value.trim();
  const items = document.querySelector('#item').value.trim();

  if (store_name && gc_balance && items) {
    const response = await fetch('/api/newStore', {
      method: 'POST',
      body: JSON.stringify({ store_name, gc_balance, items }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //     .then({
    //         const storeData = fetch(response.body);
    //   const finalData = storeData.json;
    //   console.log(finalData);
    //   });

    if (response.ok) {
      document.location.replace('/profile');
      console.log('Store data saved');
      console.log(response.body);
      console.log(store_name, gc_balance, items);
      console.log(typeof store_name);
    } else {
      alert('Failed to save store');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/newStore/${id}`, {
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

// document
//   .querySelector('.store-list')
//   .addEventListener('click', delButtonHandler);
