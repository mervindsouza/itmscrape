var cheerio = require("cheerio");
var request = require("request");

request('http://bulletin.iit.edu/graduate/colleges/applied-technology/department-information-technology-management', function (error, response, html) {
if(!error){
  var $=cheerio.load(html);
  $('#sc_sccoursedescs').each(function(i, element){
    var a = $(this);
    console.log(a.text());
  });
}
});

// let jsonframe = require('jsonframe-cheerio');
// jsonframe
// let frame = {
//   "id" : "div < coursestextcontainer",
//   "title" : "div < courseblocktitle"
// }
//
// console.log($('html').scrape(frame, {string : true}));

//testing cheerio bulletin
