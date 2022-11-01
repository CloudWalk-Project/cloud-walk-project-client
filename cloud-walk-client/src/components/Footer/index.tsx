import React from "react";
import * as S from "./style";

const Footer = () => {
  return (
    <S.Box>
      <S.Container>
        <S.Row>
          <S.Column>
            <S.Heading>What to write here?</S.Heading>
            <S.FooterLink href="#">a link to somewhere</S.FooterLink>
            <S.FooterLink href="#">another link</S.FooterLink>
            <S.FooterLink href="#">another link</S.FooterLink>
          </S.Column>
        </S.Row>
      </S.Container>
    </S.Box>
  );
};
export default Footer;
