import React from "react";
import styled from "styled-components";

const FooterBlock = styled.div`
  /* position: absolute;
    top: 850px; */
  width: 100%;
  height: 66px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const TextBlock = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.3);
`;

const Footer = () => {
  return (
    <FooterBlock>
      <TextBlock>HamzaChess © 2022</TextBlock>
    </FooterBlock>
  );
};

export default Footer;
