const form = document.forms[0]

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    if (form.password.value === form.confirmPassword.value) {
        payload = {
                    username: form.username.value,
                    password: form.password.value}
        console.log(JSON.stringify(payload))
        const response = await fetch('http://localhost:8000/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
                body: JSON.stringify(payload),
       })
        console.log(response.status, response.statusText)
        if (response.status === 200) {
            window.location = '/client_front/index.html'
        }
    } else {
        console.log(form.password, form.confirmPassword)
    }
  
  
})