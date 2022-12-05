import {
  ClassTitleLayout,
  Layout,
  People,
  StyledClassTitle,
  StyledClassUserName,
} from "./ClassInfoStyle";

const ClassInfo = () => {
  return (
    <Layout>
      <div>
        <ClassTitleLayout>
          <People />
          <StyledClassTitle>class title</StyledClassTitle>
        </ClassTitleLayout>
        <StyledClassUserName>
          <div>user name</div>
        </StyledClassUserName>
      </div>
    </Layout>
  );
};

export default ClassInfo;
