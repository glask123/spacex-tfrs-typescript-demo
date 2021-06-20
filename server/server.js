const axios = require("axios");
const cheerio = require("cheerio");

async function getHTML() {
  const { data } = await axios.get("https://tfr.faa.gov/tfr2/list.html");
  getData(data);
}

function getData(html) {
  data = [];
  const $ = cheerio.load(html);
  $("tr").each((i, elem) => {
    data.push({
      element: $(elem.childNodes),
    });
  });
  console.log(data);
}

getHTML();
