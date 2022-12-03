import styled from "styled-components";
import { PeopleFill } from "@styled-icons/bootstrap";

export const Layout = styled.div`
  display: flex;
  align-items: baseline;
  color: dimgray;
`;

export const People = styled(PeopleFill)`
  height: 20px;
  margin-right: 10px;
`;

export const StyledClassTitle = styled.div`
  height: 40px;
  font-size: larger;
  &:hover {
    color: mediumturquoise;
    font-weight: bold;
  }
`;
