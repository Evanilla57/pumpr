const homeButton = document.querySelector('#homeBtn');// Add a click event listener to the button

homeButton.addEventListener('click', (event) => {
    // Redirect to the '/home' URL
    console.log('test');
    document.location.replace('/');
});

// const home

// if (name && email && password) {
//     const response = await fetch('/api/users', {
//       method: 'POST',
//       body: JSON.stringify({ name, email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert(response.statusText);
//     }
//   }
// };