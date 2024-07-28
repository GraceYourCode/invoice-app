import ArrowDownIcon  from "../../assets/icons/icon-arrow-down.svg";
import ArrowLeftIcon from "../../assets/icons/icon-arrow-left.svg";
import ArrowRightIcon from "../../assets/icons/icon-arrow-right.svg";
import CalendarIcon from "../../assets/icons/icon-calendar.svg";
import CheckIcon from "../../assets/icons/icon-check.svg";
import DeleteIcon from "../../assets/icons/icon-delete.svg";
import MoonIcon from "../../assets/icons/icon-moon.svg";
import SunIcon from "../../assets/icons/icon-sun.svg";
import PlusIcon from "../../assets/icons/icon-plus.svg";
import { type IconProps } from "./icon.types";

export const Icon = (props: IconProps) => {
  const { name } = props;

  switch (name) {
    case "arrow-down":
      return <img src={ArrowDownIcon} alt="arrow-down icon" />;

    case "arrow-left":
      return <img src={ArrowLeftIcon} alt="arrow left icon" />;

    case "arrow-right":
      return <img src={ArrowRightIcon} alt="arow right icon"/>;

    case "calendar":
      return <img src={CalendarIcon} alt="calender icon" />;

    case "check":
      return <img src={CheckIcon} alt="check icon" />;

    case "delete":
      return <img src={DeleteIcon} alt="delete icon"/>;

    case "moon":
      return <img src={MoonIcon} alt="moon icon" />;

    case "sun":
      return <img src={SunIcon} alt="sun icon" />;

    case "plus":
      return <img src={PlusIcon} alt="plus icon" />;

    default:
      return null;
  }
};
