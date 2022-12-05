import { PeopleFill } from "@styled-icons/bootstrap";
import styled from "styled-components";

export const Layout = styled.div`
  height: 200px;
  border: 1px solid;
  background-color: rgb(216, 191, 216);
  display: flex;
  align-items: center;
  padding-left: 40px;
`;

export const StyledClassTitle = styled.div`
  color: white;
  font-size: 50px;
  font-weight: normal;
`;

export const People = styled(PeopleFill)`
  height: 50px;
  margin-right: 10px;
  color: white;
`;

export const ClassTitleLayout = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledClassUserName = styled.div`
  color: white;
  padding-left: 60px;
`;
