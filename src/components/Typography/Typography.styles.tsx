import styled, { css } from "styled-components";
import { TypographyProps } from "./Typography.types";

const headline1 = css<TypographyProps>`
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  font-family: 'Lato', sans-serif;
  ${({ color }) => color && `color: ${color}`};
`;

const headline2 = css<TypographyProps>`
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  font-family: 'Lato', sans-serif;
  ${({ color }) => color && `color: ${color}`};


`;

const headline3 = css<TypographyProps>`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  font-family: 'Lato', sans-serif;
  ${({ color }) => color && `color: ${color}`};
`;

const body = css<TypographyProps>`
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  font-family: 'Lato', sans-serif;
  ${({ color }) => color && `color: ${color}`};
`;


const subtitle = css<TypographyProps>`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  font-family: 'Lato', sans-serif;
  ${({ color }) => color && `color: ${color}`};
`;

export const Typography = styled.p<TypographyProps>`
  ${({ variants }) => {
    switch (variants) {
      case "headline1":
        return headline1;
      case "headline2":
        return headline2;
      case "headline3":
        return headline3;
      case "body":
        return body;
      case "subtitle":
        return subtitle;
      default:
        return body;
    }
  }}
`;
