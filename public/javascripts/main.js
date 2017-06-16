// Write chatr code here!

```function getMessages () {
  // In its basic form, fetch is a function that
  // takes a URL as its first argument.
  // It returns a promise that resolves with the response object.
  // The body of the response can be further processed with the
  // methods .text(), .html(), .json(), etc to parse it in
  // its respective data format.

  // If the full URL isn't provided, fetch will automatically
  // prefix the URL with the hosting domain whichw ould be
  // http://localhost:3434 in this case.
  return fetch(/*http://localhost:3434*/'/messages')
    .then(response => response.json());
}

function renderMessages (messages) {
  const messagesUl = document.getElementById('messages');
  const messagesHTML = messages.map(message => {
    return `
      <li>
        <p>${message.content}</p>
        <p>
          <strong>${message.id}</strong>
          <a data-id="${message.id}" href class="delete-button">Delete</a>
        </p>
      </li>
    `;
  }).join('');
  messagesUl.innerHTML = messagesHTML;
}
getMessages().then(renderMessages);
```

Jump
Mark as read (esc)
