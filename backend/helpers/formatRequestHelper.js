class FormatRequestHelper {
  constructor() {}
  checkRequest(output) {
    return output
    .then((result) => {
      if(result.success === true) {
        return result;
      }
    })
    .catch(() => {
      return 'Error'
    });
  }
}
module.exports = FormatRequestHelper;
