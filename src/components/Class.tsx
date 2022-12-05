import styled from "styled-components";
import ClassInfo from "./ClassInfo";
import ClassNavi from "./ClassNavi";
import VocaList from "./VocaList";

const Layout = styled.div`
  border: 1px solid;
`;

const ContentLayout = styled.div`
  padding: 40px 40px;
`;

const Class = () => {
  return (
    <Layout>
      <ClassInfo />
      <ContentLayout>
        <ClassNavi />
        <VocaList />
      </ContentLayout>
    </Layout>
  );
};

export default Class;
