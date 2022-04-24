import { LinkMenu } from "./AsideMenu.types";

import Balance from "./icons/balance.svg";
import Ordera from "./icons/ordera.svg";
import History from "./icons/history.svg";
import Deposit from "./icons/deposit.svg";
import Statistics from "./icons/statistics.svg";
import Settings from "./icons/settings.svg";
import Support from "./icons/support.svg";
import Notifications from "./icons/notifications.svg";

export const links: LinkMenu[] = [
  {
    href: "/balance",
    icon: <Balance />,
    label: "Баланс",
    id: 1,
  },

  {
    href: "/ordera",
    icon: <Ordera />,
    label: "Ордера",
    id: 2,
  },

  {
    href: "/history",
    icon: <History />,
    label: "История",
    id: 3,
  },

  {
    href: "/deposit",
    icon: <Deposit />,
    label: "Депозит",
    id: 4,
  },

  {
    href: "/statistics",
    icon: <Statistics />,
    label: "Статистика",
    id: 5,
  },

  {
    href: "/settings",
    icon: <Settings />,
    label: "Настройки",
    id: 6,
  },

  {
    href: "/support",
    icon: <Support />,
    label: "Помощь",
    id: 7,
  },

  {
    href: "/notifications",
    icon: <Notifications />,
    label: "Уведомления",
    id: 8,
    notification: 4,
  },
];
