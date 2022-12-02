import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const LoginBlock = styled.div`
  width: 512px;
  height: 768px;
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

const Login = () => {
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
    name: "",
  });

  const { id, password, name } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <LoginBlock>
      sign up page
      <form onSubmit={handleSubmit}>
        <Input name="id" placeholder="id.." onChange={onChange} value={id}></Input>
        <Input
          name="password"
          placeholder="password.."
          onChange={onChange}
          value={password}
        ></Input>
        <Input
          name="name"
          placeholder="name.."
          onChange={onChange}
          value={name}
        ></Input>
        <button type="submit">sign up</button>
      </form>
    </LoginBlock>
  );
};

export default Login;
