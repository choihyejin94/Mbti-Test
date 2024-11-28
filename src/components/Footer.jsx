import styled from "styled-components";

const FooterWrapper = styled.div`
  position: relative;
  border-top: 1px solid #d8d8d8;
  height: 70px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #878787;
`;

const Footer = () => {
    return (
        <FooterWrapper>TEL.032.1234.5678 / 인천광역시 내일배움캠프구 스파르타로
            <br />
            ©Hyejin corp.
        </FooterWrapper>
    )
}

export default Footer