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
    case "finance":
      return "finance";
      break;
    case "business":
      return "business";
      break;
    case "hobby":
      return "hobby";
      break;
    case "study":
      return "study";
      break;
    case "home":
      return "home";
      break;
    case "family":
      return "family";
      break;
    default:
      return "none";
  }
};

export default habitColorFunction;
