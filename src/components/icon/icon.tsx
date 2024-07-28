import { type IconProps } from "./icon.types";

export const Icon = (props: IconProps) => {
  const { name } = props;

  switch (name) {
    case "arrow-down":
      return <img src="/assets/icons/icon-arrow-down.svg" alt="arrow-down icon" />;

    case "arrow-left":
      return <img src="/assets/icons/icon-arrow-left.svg" alt="arrow left icon" />;

    case "arrow-right":
      return <img src="/assets/icons/icon-arrow-right.svg" alt="arow right icon"/>;

    case "calendar":
      return <img src="/assets/icons/icon-calendar.svg" alt="calender icon" />;

    case "check":
      return <img src="/assets/icons/icon-check.svg" alt="check icon" />;

    case "delete":
      return <img src="/assets/icons/icon-delete.svg" alt="delete icon"/>;

    case "moon":
      return <img src="/assets/icons/icon-moon.svg" alt="moon icon" />;

    case "sun":
      return <img src="/assets/icons/icon-sun.svg" alt="sun icon" />;

    case "plus":
      return <img src="/assets/icons/icon-plus.svg" alt="plus icon" />;

    default:
      return null;
  }
};
