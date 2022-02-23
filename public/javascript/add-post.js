async function newFormHandler(event) {
  event.preventDefault();

  const events = document.querySelector('input[name="post-event"]').value;
  const location = document.querySelector('input[name="post-location"]').value;
  const date = document.querySelector('input[name="post-date"]').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      events,
      location,
      date,
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
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);
