document
  .querySelector('#user-search-form')
  .addEventListener('submit', async (event) => {
    event.preventDefault();

    // Get the email input value
    const email = document.querySelector('#email').value;
    const emailEncoded = encodeURIComponent(email);
    // Make a Fetch request to your Express route with the email as a query parameter
    const response = await fetch(`/api/find-users/${emailEncoded}`);
    console.log(response);

    if (response.ok) {

      const result = await response.json();

      window.location.href = `/profile/${result.id}`;
    } else {
      alert('Failed to fetch search results.');
    }
  });
