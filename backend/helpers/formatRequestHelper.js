class FormatRequestHelper {
  constructor() {}
  formatRequest(output) {
    
    if (output && output.success === true) {
      return output;
    } else {
      console.log("output formatRequest BAd>>>", output);
    }
  }
}
module.exports = FormatRequestHelper;
