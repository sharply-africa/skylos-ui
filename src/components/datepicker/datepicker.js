import React, { useState } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { DateUtils } from "react-day-picker";
import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";
import { Input } from "../input";

const currentYear = new Date().getFullYear();
const fromMonth = new Date(currentYear, 0);
const toMonth = new Date(currentYear - 70, 11);

function YearMonthForm({ date, localeUtils, onChange }) {
  const months = localeUtils.getMonths();

  const years = [];
  for (let i = fromMonth.getFullYear(); i >= toMonth.getFullYear(); i -= 1) {
    years.push(i);
  }

  const handleChange = function handleChange(e) {
    const { year, month } = e.target.form;
    onChange(new Date(year.value, month.value));
  };

  return (
    <form className="DayPicker-Caption">
      <select name="month" onChange={handleChange} value={date.getMonth()}>
        {months.map((month, i) => (
          <option key={month} value={i}>
            {month}
          </option>
        ))}
      </select>
      <select name="year" onChange={handleChange} value={date.getFullYear()}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </form>
  );
}

function parseDate(str, format, locale) {
  const parsed = dateFnsParse(str, format, { locale });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date, format, locale) {
  return dateFnsFormat(date, format, { locale });
}

export const DatePicker = ({
  onChange = () => {},
  placeholder = "yyyy-mm-dd",
  ...props
}) => {
  const [month, setMonth] = useState(fromMonth);
  const FORMAT = "yyyy-MM-dd";

  const handleYearMonthChange = (newMonth) => {
    setMonth(newMonth);
  };

  return (
    <DayPickerInput
      format={FORMAT}
      formatDate={formatDate}
      keepFocus={false}
      onDayChange={onChange}
      parseDate={parseDate}
      placeholder={placeholder}
      style={{ display: "block" }}
      dayPickerProps={{
        month,
        fromMonth,
        toMonth,
        captionElement: ({ date, localeUtils }) => (
          <YearMonthForm
            date={date}
            localeUtils={localeUtils}
            onChange={handleYearMonthChange}
          />
        ),
        disabledDays: { after: new Date() },
        ...props,
      }}
      {...props}
      component={(props) => <Input readOnly {...props} />}
    />
  );
};
