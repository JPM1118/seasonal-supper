const imgApiCall = produce => {
  let https = require("https");
  let subscriptionKey = "42a044f724274e25bc725ac5e3fadb06";
  let host = "api.cognitive.microsoft.com";
  let path = "/bing/v7.0/images/search";
  let term = `${produce} produce`;

  let response_handler = async function(response) {
    let body = "";
    await response.on("data", function(d) {
      body += d;
    });

    await response.on("end", function() {
      let imageResults = JSON.parse(body);
      if (imageResults.value.length > 0) {
        let firstImageResult = imageResults.value[0];
        // // console.log(`Image result count: ${imageResults.value.length}`);
        // console
        //   .log
        //   // `First image insightsToken: ${firstImageResult.imageInsightsToken}`
        //   ();
        // console
        //   .log
        //   // `First image thumbnail url: ${firstImageResult.thumbnailUrl}`
        //   ();
        // console
        //   .log
        //   // `First image web search url: ${firstImageResult.webSearchUrl}`
        //   ();
        let result = imageResults;
        // console.log(`result: ${result}, typeof: ${typeof result}`);
        return result;
      } else {
        console.log("Couldn't find image results!");
      }
    });
    response.on("error", function(e) {
      console.log("Error: " + e.message);
    });
  };

  let bing_image_search = async function(search) {
    console.log("Searching images for: " + term);
    let request_params = {
      method: "GET",
      hostname: host,
      path: path + "?q=" + encodeURIComponent(search),
      headers: {
        "Ocp-Apim-Subscription-Key": subscriptionKey
      }
    };

    let req = await https.request(request_params, response_handler);
    await req.end();
  };

  if (subscriptionKey.length === 32) {
    bing_image_search(term);
  } else {
    console.log("Invalid Bing Search API subscription key!");
    console.log("Please paste yours into the source code.");
  }
};
export default imgApiCall;
