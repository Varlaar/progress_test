import moment from "moment";

const normalizeBurningDate = (props) => moment(props).format("DD.MM");

export default normalizeBurningDate;
