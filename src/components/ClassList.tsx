import { ReactElement } from "react";
import styled from "styled-components";
import ClassListItem from "./ClassListItem";

interface ClassListItemType {
  id: number;
  title: string;
}

const Layout = styled.div`
  padding: 10px;
  border: 1px solid;
`;

const StyledDiv = styled.div`
  padding-top: 30px;
  color: gray;
`;

const ClassList = () => {
  const classListItems: ClassListItemType[] = [
    { id: 1, title: "class1" },
    { id: 2, title: "class2" },
    { id: 3, title: "class3" },
    { id: 4, title: "class4" },
  ];

  return (
    <Layout>
      <StyledDiv>나의 클래스</StyledDiv>
      <nav>
        <ul>
          {classListItems.map(
            (classItem: ClassListItemType): ReactElement => (
              <ClassListItem classItem={classItem} key={classItem.id} />
            )
          )}
        </ul>
      </nav>
    </Layout>
  );
};

export default ClassList;
