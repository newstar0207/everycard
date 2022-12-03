import { Layout, People, StyledClassTitle } from "./ClassListItemStyle";

type ClassListItemType = {
  id: number;
  title: string;
};

const ClassListItem = ({ classItem }: { classItem: ClassListItemType }) => {
  return (
    <li>
      <Layout>
        <StyledClassTitle>
          <People />
          {classItem.title}
        </StyledClassTitle>
      </Layout>
    </li>
  );
};

export default ClassListItem;
