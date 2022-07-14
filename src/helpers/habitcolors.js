const habitColorFunction = (type) => {
  switch (type) {
    case "sport":
      return "sport";
      break;
    case "food":
      return "food";
      break;
    case "mind":
      return "mind";
      break;
    case "health":
      return "health";
      break;
    default:
      return "none";
  }
};

export default habitColorFunction;
