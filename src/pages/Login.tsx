import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid;
  width: 100%;
  margin-bottom: 12px;
  font-size: 18px;
`;

const LoginBlock = styled.div`
  width: 512px;
  height: 768px;
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  background: ${(props) => props.color};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid;
  border-radius: 3px;
`;

const Login = () => {
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });

  const { id, password } = inputs;

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
      <Form onSubmit={handleSubmit}>
        <Input
          autoFocus
          name="id"
          placeholder="id.."
          onChange={onChange}
          value={id}
        ></Input>
        <Input
          name="password"
          placeholder="password.."
          onChange={onChange}
          value={password}
        ></Input>
        <Button color="gray" type="submit">
          sign up
        </Button>
      </Form>
    </LoginBlock>
  );
};

export default Login;
