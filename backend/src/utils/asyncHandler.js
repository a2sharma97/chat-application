const asyncHandler = (requestHandler) => {
  //higher-order fns
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) => {
      next(error);
    });
  };
};

export { asyncHandler };
