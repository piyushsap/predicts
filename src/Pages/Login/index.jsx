import React from 'react';

import { Button, Input } from "../../Component";

function Login() {
    
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    let details = {
      username : form.username.value,
      password : form.password.value,
    }
    console.log(details);
  };
  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
          <Input {...{name:"username", placeHolder:"User name", id:"username"}} />
          <Input {...{name:"password",type:"password", placeHolder:"Password", id:"password"}} />
          <Button {...{text:"Login"}} />
      </form>
    </section>
  );
}

export default Login;