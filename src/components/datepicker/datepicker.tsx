import BaseDatePicker from "react-datepicker";
import clsx from "clsx";
import { type DatePickerProps } from "./datepicker.types";
import styles from "./datepicker.module.scss";
import { Icon } from "../icon/icon";

export const DatePicker = (props: DatePickerProps) => {
  const { label, name, errorMessage, className } = props;

  return (
    <div className={clsx(styles.form_field, className)}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <div className={styles.wrapper}>
        <BaseDatePicker
          selectsRange={undefined}
          id={name}
          name={name}
          dateFormat="d MMM yyyy"
          popperClassName={styles.popper}
          calendarClassName={styles.calendar}
          className={clsx(styles.input, {
            [styles.error]: !!errorMessage,
          })}
        />
        <Icon name="calendar" className={styles.calendar_icon} />
      </div>
      {errorMessage && (
        <span className={styles.error_message}>{errorMessage}</span>
      )}
    </div>
  );
};
