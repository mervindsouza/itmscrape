let axios = require('axios');
let cheerio = require('cheerio');

let base_url = 'http://bulletin.iit.edu/graduate/colleges/applied-technology/department-information-technology-management/#coursestext';

axios.get(base_url).then( (response) => {
  let $ = cheerio.load(response.data);
  let darr = [];
  $('div', '.courseblock').each((i, elm)=>{
    darr.push({
      //coursecode: $(elm).children().first().text(),
      coursetitle: $(elm).children().first().text(),
      courseblockdesc: $(elm).children().eq(2).first().text(),
      courseblockattr: $(elm).children().eq(3).first().text()
    });
  });
  return (darr);
})

.then((darr)=>{
  console.log(darr);
});
