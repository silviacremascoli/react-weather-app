import React from "react";
import moment from "moment";

export default function FormattedDate(props) {
  const date = props.date;
  return moment(date).format(`dddd, hh:ss A`);
}
