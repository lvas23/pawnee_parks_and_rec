fetch('/api/calendar', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(calendarObject)
})
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        alert('Error: ' + response.statusText);
    })
    .then(postResponse => {
        console.log(postResponse);
        alert('Thank you for adding an animal!');
    });