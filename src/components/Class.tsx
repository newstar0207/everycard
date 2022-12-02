import styled from "styled-components";
import ClassInfo from "./ClassInfo";
import ClassNavi from "./ClassNavi";
import VocaList from "./VocaList";

const Layout = styled.div`
  border: 1px solid;
`;

const Class = () => {
  return (
    <Layout>
      <ClassInfo />
      <ClassNavi />
      <VocaList />
    </Layout>
  );
};

export default Class;
