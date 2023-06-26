import React from "react";
import moment from "moment";

export default function FormattedDate(props) {
  const date = props.date;
  const formattedDate = moment(date).format("dddd, hh:mm A");
  return formattedDate;
}
