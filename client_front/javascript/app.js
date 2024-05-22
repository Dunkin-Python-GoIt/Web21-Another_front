token = localStorage.getItem('accessToken')

const get_books = async () => {
  const response = await fetch('http://localhost:8000/api/books/', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  console.log(response.status, response.statusText)
  if (response.status === 200) {
      result = await response.json()
      for (book of result) {
        el = document.createElement('li')
        el.className = 'list-group-item'
        el.innerHTML = `ID: ${book.id} title: <b>${book.title}</b> author: ${book.author} owner: ${book.owner.username}`
      document.body.appendChild(el)    
    }
  } else {
      h1 = document.createElement("H1")
      h1.className = 'text-center'
      t1 = document.createTextNode("You not authorized")
      h1.appendChild(t1)
      document.body.appendChild(h1)

      h3 = document.createElement("H3")
      h3.className = 'text-center'
      a2 = document.createTextNode("")
      h3.innerHTML += '<a href=/index.html> login </> <a href=/client_front/register.html> register </>'
      h3.appendChild(a2)
      document.body.appendChild(h3)
  }
}


get_books()