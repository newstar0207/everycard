import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Login from "./pages/Login";
import Main from "./pages/Main";

const Layout = styled.div``;

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
