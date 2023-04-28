import moment from "moment";

export default function FormattedDate(props) {
  const date = props.date;
  return moment(date).format(`ddd, hh:ss A`);
}
