import React from 'react';
import styled from 'styled-components'

function SignUp(){
  const Form = styled.form`
    display: grid;
    justify-content: center;
    input{
      width: 200px;
      margin-top: 10px;
    }
    button{
      width: 100px;
      justify-self: center;
      margin-top: 10px;
    }
  `

  function test(e){
    e.preventDefault();
  }
  return(
    <div>
    <h1>Create your new account</h1>
      <Form onSubmit={test}>
        <input type="text" placeholder="email"/>
        <input type="password" placeholder="password"/>
        <button type="submit">Create Account</button>
      </Form>
    </div>
  )
}

export default SignUp;
