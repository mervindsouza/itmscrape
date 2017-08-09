var cheerio = require('cheerio');
var request = require('request');
let jsonframe = require('jsonframe-cheerio');

request('http://bulletin.iit.edu/graduate/colleges/applied-technology/department-information-technology-management/#coursestext', function(error, response, html){
  if(!error && response.statusCode == 200){
    //console.log(html);
    var $=cheerio.load(html);
    jsonframe($);

    //Retrieve Single Record

    let frame = {
      "coursecode": ".coursecode:contains('ITMD')",
      "coursetitle" : ".coursetitle:has(strong)",
      "courseblockdesc" : ".courseblockdesc:has(p)",
      "courseblockattr": ".courseblockattr:has(span):has(strong)"
    }
    console.log($(html).scrape(frame, {string: true}));

    //Retrieve Multiple Records

    $(".courseblock").each(function(){
    let frame2 = {
      "coursestextcontainer": {
        _s: "#coursestextcontainer .courseblock",
        _d: [{
          "coursecode": ".coursecode:contains('ITMD')",
          "coursetitle" : ".coursetitle:has(strong)",
          "courseblockdesc" : ".courseblockdesc:has(p)",
          "courseblockattr": ".courseblockattr:has(span):has(strong)"
        }]
      }
    }
    let scrapeResult = $(html).scrape(frame2, {string: true})
    console.log(scrapeResult);
  })
}
});
