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
    case "finance":
      return "euro";
      break;
    case "business":
      return "work";
      break;
    case "hobby":
      return "sports_esports";
      break;
    case "study":
      return "school";
      break;
    case "home":
      return "home";
      break;
    case "family":
      return "family_restroom";
      break;

    default:
      return "question_mark";
  }
};

export default habitLogoFunction;
