import React from "react";
import * as S from "./style";

const Footer = () => {
  return (
    <S.Box>
      <S.Container>
        <S.Row>
          <S.Column>

            <S.FooterLink href="#">another link</S.FooterLink>
            <S.FooterLink href="#">another link</S.FooterLink>
            <S.FooterLink href="#">another link</S.FooterLink>
          </S.Column>
        </S.Row>
      </S.Container>
    </S.Box>
  );
};
export default Footer;
