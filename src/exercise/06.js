// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // const [error, setError] = React.useState(null);
  // const inputRef = React.useRef();
  const [username, setUsername] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmitUsername(username);
  };

  const handleChange = (event) => {
    const {value} = event.target;
    // const isValid = value === value.toLowerCase();
    // setError(isValid ? null : 'Username must be lower case')

    setUsername(value.toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        {/* <input type="text" id="usernameInput" ref={inputRef} onChange={handleChange}/> */}
        <input type="text" id="usernameInput" value={username} onChange={handleChange}/>
      </div>
      {/* { error && <div role="error" style={{color: 'red'}}>{error}</div>} */}
      <button type="submit" disabled={!username}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
