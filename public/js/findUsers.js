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
      // Parse the response to get the search results (assuming it returns JSON)
      const searchResults = await response.json();
      const searchResultsDiv = document.getElementById('search-results');
      searchResultsDiv.innerHTML = ''; // Clear previous results
      // Iterate through searchResults and create HTML elements to display each result
      searchResults.forEach((result) => {
        const resultElement = document.createElement('div');
        resultElement.innerHTML = `
      <h3>${result.name}</h3>
      <p>Email: ${result.email}</p>
      <!-- Add more details as needed -->
    `;

        searchResultsDiv.appendChild(resultElement); // Append each result to the container
      });
      // Update the search results display in your HTML
      // You can do this using JavaScript or a JavaScript templating library like Handlebars
    } else {
      alert('Failed to fetch search results.');
    }
  });
