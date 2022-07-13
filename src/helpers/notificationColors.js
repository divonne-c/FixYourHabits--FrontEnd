const NotificationColors = (type) => {
  switch (type) {
    case "error":
      return "error";
      break;
    case "success":
      return "success";
      break;
  }
};

export default NotificationColors;
