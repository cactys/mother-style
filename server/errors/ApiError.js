const { ERROR_404, ERROR_500, ERROR_403 } = require('../utils/code');

class ApiError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static badRequest(message) {
    return new ApiError(ERROR_404, message);
  }

  static internal(message) {
    return new ApiError(ERROR_500, message);
  }

  static forbidden(message) {
    return new ApiError(ERROR_403, message);
  }
}

module.exports = ApiError;
