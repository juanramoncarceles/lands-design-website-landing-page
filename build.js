var fs = require('fs');
var path = require('path');

// PATH TO THE ORIGINAL HTML FILE:
const filePath = path.join(__dirname, 'src/index.html');

// SRC ATTRIBUTES CONTENT TO REPLACE:
const replacers = {
  // BANNER
  bannerOne: 'https://stg.lands-design.com/wp-content/uploads/2019/10/15580157028_7a02d3853f_o-1.jpg',
  bannerTwo: 'https://stg.lands-design.com/wp-content/uploads/2019/10/15765573295_a32a330218_o.jpg',
  bannerThree: 'https://stg.lands-design.com/wp-content/uploads/2019/12/shrubs-mejor.jpg',
  // MAIN VIDEO
  mainVideo: 'https://stg.lands-design.com/wp-content/uploads/2019/12/LandsPromo-Q35-M.mp4',
  // HOW IS LANDS USED
  landscapeArch: 'https://stg.lands-design.com/wp-content/uploads/2019/12/big-park.jpg',
  greenInfrastructure: 'https://stg.lands-design.com/wp-content/uploads/2019/12/green-infrastructure.jpeg',
  forestry: 'https://stg.lands-design.com/wp-content/uploads/2019/12/forestry-enscape.jpg',
  urbanPlanning: 'https://stg.lands-design.com/wp-content/uploads/2019/12/urban-planning.jpg',
  cgArtists: 'https://stg.lands-design.com/wp-content/uploads/2019/12/cg-artists.jpg',
  // WHY LANDS (gifs)
  lim: 'https://stg.lands-design.com/wp-content/uploads/2019/12/LandsBIM.gif',
  terrains: 'https://stg.lands-design.com/wp-content/uploads/2019/12/TerrainOperations.gif',
  collaboration: 'https://stg.lands-design.com/wp-content/uploads/2019/12/placeholder-img.jpg',
  plantDatabase: 'https://stg.lands-design.com/wp-content/uploads/2019/12/LandsPlantsDatabase.gif',
  dynamicDoc: 'https://stg.lands-design.com/wp-content/uploads/2019/12/placeholder-img.jpg',
  parametricDesign: 'https://stg.lands-design.com/wp-content/uploads/2019/12/LandsParametricDesign.gif',
  liveTheProject: 'https://stg.lands-design.com/wp-content/uploads/2019/12/placeholder-img.jpg',
  // PLATFORMS
  logoRhino: 'https://stg.lands-design.com/wp-content/uploads/2019/12/RhinoHead.png',
  logoAutocad: 'https://stg.lands-design.com/wp-content/uploads/2019/11/autocad-logo.png'
}

// REGEXP REPLACEMENT LOGIC:
const regexp = /replaceSrc="([a-zA-Z]+)".+?(src="[^"]+")/g;

function replacer(match, p1, p2) {
  return p2.replace(/src="[^"]+"/, 'src="' + replacers[p1] + '"');
}

// READ, REPLACE AND WRITE THE FILE:
fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
  if (!err) {
    // Remove breaklines and extract the only the required fragment:
    const htmlFragment = data.replace(/\r+\s*/g, '').match(/<!-- EXTRACT -->(.*)<!-- EXTRACT -->/)[1]; // <!-- HERE -->(\s*.*)<!-- HERE -->

    const finalHtml = htmlFragment.replace(regexp, replacer);

    fs.writeFile('./dist/landsWebHome.html', finalHtml, err => {
      if (err) throw err;
      console.log('File created successfully.');
    });
  } else {
    console.log(err);
  }
});