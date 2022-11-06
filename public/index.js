const btn = document.querySelector('button');
const text = document.querySelector('p');

let key = config.apiKey;

text.addEventListener('onload', () => (text.innerHTML = ''));
//Fetch a list of best selling books from the NYT Books API.
btn.addEventListener('click', async (e) => {
  let response = fetch(
    'api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=' +
      key,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then((respone) => respone.json())
    .then((data) => {
      //Append listings to the DOM.
      text.innerHTML = '';
      text.innerHTML = data;
    })
    .catch((error) => console.log(error));
});
