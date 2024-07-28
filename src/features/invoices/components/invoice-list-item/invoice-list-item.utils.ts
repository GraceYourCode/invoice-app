import { currencyFormatter, dateFormatter } from "../../../../lib";
import { stringToDate } from "../../utils/date";

export const toCurrency = (num: number) => currencyFormatter.format(num);

export const toPaymentDate = (date: string) =>
  dateFormatter.format(stringToDate(date));
