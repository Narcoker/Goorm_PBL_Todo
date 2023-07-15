import React, { forwardRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";

function DateSelector({
  time,
  disabled,
  onChnageHandler,
  parentUUID,
  uuid,
  minDate,
  maxDate,
  small,
}) {
  const ExampleCustomInput = forwardRef(({ value, onClick, small }, ref) => (
    <button
      style={{
        // border: "1px solid red",
        border: "none",
        fontSize: small ? "11px" : "14px",
        padding: "0",
        backgroundColor: "transparent",
        textAlign: "center",
        height: "100%",
        lineHeight: "100%",
        cursor: "pointer",
      }}
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ));
  return (
    <ReactDatePicker
      selected={time}
      onChange={(time) => onChnageHandler(parentUUID, uuid, time.toISOString())}
      timeInputLabel="Time:"
      dateFormat="yyyy/MM/dd hh:mm aa"
      showTimeInput
      disabled={disabled}
      customInput={<ExampleCustomInput small={small} />}
      minDate={new Date(minDate)}
      maxDate={new Date(maxDate)}
    />
  );
}

export default DateSelector;
