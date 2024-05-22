const form = document.forms[0]
token = localStorage.getItem('accessToken')

if (token === null) {
  window.location = '/client_front/index.html'
}

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  const response = await fetch('http://localhost:8000/api/books/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      title: form.bookTitle.value,
      author: form.bookAuthor.value,
    }),
  })
  console.log(response.status, response.statusText)
  if (response.status === 200) {
    result = await response.json()
    window.location = '/client_front/app.html'
  }
})