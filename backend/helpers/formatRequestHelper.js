class FormatRequestHelper {
  constructor() {}
  checkRequest(output) {
    return output
    .then((result) => {
      if(result.success === true) {
        return result;
      }
    })
    .catch((result) => {
      return result.error;
    });
  }
}
module.exports = FormatRequestHelper;
