import React, { useState} from 'react'

const SignInAndSignUpPage = () => {
      const [name, setName] = useState('');
      const [password, setPassword] = useState("");
      const [description, setDescription] = useState("");
      console.log({name,password,description})
      return (
        <div className="sign-in-and-sign-up">
          <h1>sign up</h1>
          <form>
            <input
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Name"
            ></input>
            <input
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
            ></input>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              name="descriptipn"
              value={description}
              rows="2"
              placeholder="Decription"
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      );
}
export default SignInAndSignUpPage;