import { AsideMenu } from "../../components";
import { AsideStyled } from "./Aside.styles";
import { AsideProps } from "./Aside.types";

import { links } from "../../components/AsideMenu/AsideMenu.data";

export const Aside: React.FC<AsideProps> = () => {
  return (
    <AsideStyled>
      <AsideMenu links={links} />
    </AsideStyled>
  );
};
