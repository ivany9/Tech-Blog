const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password =document.querySelector('#password').value.trim();

  if (name && email  && password ) {
    const response = await fetch(`/api/users`, {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/p');
    } else {
      alert('error');
    }
  }
};


document.querySelector('.singup-form').addEventListener('submit', newFormHandler);
