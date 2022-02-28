async function newFormHandler(event) {
  event.preventDefault();

  const events = document.querySelector('input[name="complaint-text"]').value;
  // const location = document.querySelector('input[name="post-location"]').value;
  // const date = document.querySelector('input[name="post-date"]').value;

  const response = await fetch(`/api/complaints`, {
    method: 'POST',
    body: JSON.stringify({
      events,
      // location,
      // date,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('.complaint-form')
  .addEventListener('submit', newFormHandler);
