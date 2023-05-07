import './App.css'

function App() {

  // getting user data using a form
  const handleSubmit = event => {
    event.preventDefault()

    const form = event.target
    const name = form.name.value;
    const email = form.email.value
    const user = { name, email }
    console.log(user)

    // sending user information to server to create a user in database
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      // user er information ta stringify kore pathate hobe
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)

        if(data.insertedId){
          alert("Users added successfully.")
          form.reset()
        }
      })
  }

  return (
    <>
      <h1>Simple CRUD</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' />
        <br />
        <input type="email" name='email' />
        <br />
        <input type="submit" name='Add User' />
      </form>
    </>
  )
}

export default App
