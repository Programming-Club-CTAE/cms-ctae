import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <CopyrightContainer className="copyright">
        <h4>
          &copy; {new Date().getFullYear()} |CodeArt.pvt.ltd| made with love ❤️
        </h4>
      </CopyrightContainer>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  margin-top: 60px;
  width: 100%;
  padding: 50px 80px;
`;

const CopyrightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #333;
  padding-top: 30px;
`;
