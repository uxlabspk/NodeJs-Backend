import { constants } from "../constants.js";

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : constants.SERVER_ERROR;

  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({ title: "Validation Error", message: err.message });
      break;

    case constants.UNAUTHORIZED_ACCESS:
      res.json({ title: "Unauthorized Access", message: err.message });
      break;

    case constants.FORBIDDEN_ERROR:
      res.json({ title: "Forbidden", message: err.message });
      break;

    case constants.NOT_FOUND_ERROR:
      res.json({ title: "Not Found", message: err.message });
      break;

    case constants.SERVER_ERROR:
      res.json({ title: "Internal Server Error", message: err.message });
      break;

    default:
      console.log("All good");
      break;
  }
  res.json({ title: "", message: err.message });
};

export default errorHandler;
