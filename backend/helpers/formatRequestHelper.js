class FormatRequestHelper {
  constructor() {}
  formatRequest(output) {
    let arrayRequest = [];
    console.log("output>>>", output);
    console.log("output.success>>>", output.success === true);

    if (output && output.success === true) {
      console.log("output formatRequest>>>", output);
      return output;
    } else {
      console.log("output formatRequest BAd>>>", output);
    }
    // return arrayRequest;
  }
}
module.exports = FormatRequestHelper;
