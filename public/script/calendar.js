fetch('/api/calendar')
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        alert('Error: ' + response.statusText);
    })
    .then(calendar => showCalendar(calendar.results));

showCalendar = calendar => {
    const calendarDiv = document.querySelector('#display-area');

        calendar.forEach(date => {
            const calendarElement = document.createElement('p');

            calendarElement.innerText = 
                `Event: ${event.name}
                 Time: ${dayOfTheWeek.name} at ${time.name}
                `;
            calendarDiv.append(calendarElement);
        });
}