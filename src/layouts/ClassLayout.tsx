import styled from "styled-components";
import Class from "../components/Class";
import ClassList from "../components/ClassList";

const Layout = styled.div`
  margin: 70px auto;
  display: grid;
  grid-template-columns: 2fr 5fr;
  grid-gap: 10px;
`;

const ClassLayout = () => {
  return (
    <Layout>
      <ClassList />
      <Class />
    </Layout>
  );
};

export default ClassLayout;
