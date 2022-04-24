import { useIsMounted } from "../../hooks/useIsMounted";

import { AsideItem, AsideLink, AsideList, Icon, Notification } from "./AsideMenu.styles";

import { AsideMenuProps } from "./AsideMenu.types";

import Logout from "./icons/logout.svg";

export const AsideMenu: React.FC<AsideMenuProps> = ({ links, ...props }) => {
 
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <AsideList {...props}>
      
        {links.map(({ label, id, icon, notification }) => (
          <AsideItem key={id}>

              <AsideLink>
                <Icon>{icon}</Icon>
                {label}
                {notification && <Notification>{notification}</Notification>}
              </AsideLink>
           
          </AsideItem>
        ))}
        <AsideItem>
          <AsideLink as="button">
            <Icon>
              <Logout />
            </Icon>
            Выход
          </AsideLink>
        </AsideItem>
      
    </AsideList>
  );
};
