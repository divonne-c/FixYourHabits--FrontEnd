const habitLogoFunction = (type) => {
  switch (type) {
    case "sport":
      return "sports_basketball";
      break;
    case "food":
      return "restaurant";
      break;
    case "mind":
      return "menu_book";
      break;
    case "health":
      return "favorite";
      break;
    default:
      return "question_mark";
  }
};

export default habitLogoFunction;
