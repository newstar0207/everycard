import styled from "styled-components";
import ClassInfo from "../components/Class";
import VocaList from "../components/VocaList";

const Layout = styled.div`
  border: 1px solid;
`;

const VocaLayout = () => {
  return (
    <Layout>
      <ClassInfo />
      <div>
        <div>
          <ul>
            <li>set</li>
            <li>report</li>
            <li>message</li>
            <li>setting</li>
          </ul>
        </div>
        <VocaList />
      </div>
    </Layout>
  );
};

export default VocaLayout;
