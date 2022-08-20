// Working with Unicode scripts

// Sample data from the scripts.js file on the eloquentjavascript.net page

SCRIPTS = [
    {
    name: "Adlam",
    ranges: [[125184, 125259], [125264, 125274], [125278, 125280]],
    direction: "rtl",
    year: 1987,
    living: true,
    link: "https://en.wikipedia.org/wiki/Fula_alphabets#Adlam_alphabet"
  },
  {
    name: "Caucasian Albanian",
    ranges: [[66864, 66916], [66927, 66928]],
    direction: "ltr",
    year: 420,
    living: false,
    link: "https://en.wikipedia.org/wiki/Caucasian_Albanian_alphabet"
  },
  {
    name: "Ahom",
    ranges: [[71424, 71450], [71453, 71468], [71472, 71488]],
    direction: "ltr",
    year: 1250,
    living: false,
    link: "https://en.wikipedia.org/wiki/Ahom_alphabet"
  },
  {
    name: "Imperial Aramaic",
    ranges: [[67648, 67670], [67671, 67680]],
    direction: "rtl",
    year: 800,
    living: false,
    link: "https://en.wikipedia.org/wiki/Aramaic_alphabet"
  },
  {
    name: "Armenian",
    ranges: [[1329, 1367], [1369, 1376], [1377, 1416], [1418, 1419], [1421, 1424], [64275, 64280]],
    direction: "ltr",
    year: 405,
    living: true,
    link: "https://en.wikipedia.org/wiki/Armenian_alphabet"
  },
  {
    name: "Avestan",
    ranges: [[68352, 68406], [68409, 68416]],
    direction: "rtl",
    year: 400,
    living: false,
    link: "https://en.wikipedia.org/wiki/Avestan_alphabet"
  },
  {
    name: "Balinese",
    ranges: [[6912, 6988], [6992, 7037]],
    direction: "ltr",
    year: 1000,
    living: true,
    link: "https://en.wikipedia.org/wiki/Balinese_script"
  },
  {
    name: "Bamum",
    ranges: [[42656, 42744], [92160, 92729]],
    direction: "ltr",
    year: 1896,
    living: true,
    link: "https://en.wikipedia.org/wiki/Bamum_script"
  },
  {
    name: "Bassa Vah",
    ranges: [[92880, 92910], [92912, 92918]],
    direction: "ltr",
    year: 1950,
    living: false,
    link: "https://en.wikipedia.org/wiki/Bassa_alphabet"
  },
  {
    name: "Batak",
    ranges: [[7104, 7156], [7164, 7168]],
    direction: "ltr",
    year: 1300,
    living: true,
    link: "https://en.wikipedia.org/wiki/Batak_alphabet"
  },
]
function filter(array, test){
    let passed = [];

    for (let element of array){
        if(test(element)){
            passed.push(element);
        }
    }
    return passed;
}

console.log(filter(SCRIPTS, scripts => scripts.living));

function map(array, transform){
    let mapped = [];

    for(let element of array){
        mapped.push(transform(element));
    }

    return mapped;
}

let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");

console.log("\n");
console.log(map(rtlScripts, s => s.name));