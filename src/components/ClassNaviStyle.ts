import styled from "styled-components";

export const UL = styled.ul`
  display: flex;
  border-bottom: 1px solid lightgray;
`;

export const LI = styled.li`
  margin-right: 55px;
  padding-bottom: 10px;
  border: 4px solid white;
  color: dimgray;
  &:hover {
    border-bottom: 4px solid mediumturquoise;
    color: mediumturquoise;
  }
`;
