import styled from "styled-components";

const StyledHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
`;

const UL = styled.ul`
  display: flex;
`;

const LI = styled.li`
  margin: 0px 10px 0px;
`;
const Header = () => {
  return (
    <StyledHeader>
      <div>title</div>
      <nav>
        <UL>
          <LI>menu1</LI>
          <LI>menu2</LI>
          <LI>menu3</LI>
        </UL>
      </nav>
      <div>profile</div>
    </StyledHeader>
  );
};

export default Header;
