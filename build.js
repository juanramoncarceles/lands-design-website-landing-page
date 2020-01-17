var fs = require('fs');
var path = require('path');

// PATH TO THE ORIGINAL HTML FILE:
const filePath = path.join(__dirname, 'src/index.html');

// SRC ATTRIBUTES CONTENT TO REPLACE:
const replacers = {
  // BANNER
  bannerOne: {
    url: 'https://stg.lands-design.com/wp-content/uploads/2019/10/15580157028_7a02d3853f_o-1.jpg',
    alt: 'Lands Design project of a pond surrounded by a park with a pathway in front of the water.'
  },
  bannerTwo: {
    url: 'https://stg.lands-design.com/wp-content/uploads/2019/10/15765573295_a32a330218_o.jpg',
    alt: 'Lands Design project of a park with pathways, green areas and a big blue art structure.'
  },
  bannerThree: {
    url: 'https://stg.lands-design.com/wp-content/uploads/2019/12/shrubs-mejor.jpg',
    alt: 'Lands Design project of a garden with small organized plants and trees.'
  },
  // MAIN VIDEO
  mainVideo: {
    url: 'https://stg.lands-design.com/wp-content/uploads/2019/12/LandsPromo-Q35-M.mp4'
  },
  // HOW IS LANDS USED
  landscapeArch: {
    url: 'https://stg.lands-design.com/wp-content/uploads/2019/12/big-park.jpg',
    alt: 'Bird\'s eye view of the Canal Park project created with Lands Design. Big green areas mixed with water areas.'
  },
  greenInfrastructure: {
    url: 'https://stg.lands-design.com/wp-content/uploads/2019/12/green-infrastructure.jpeg',
    alt: 'View of a viaduct covered with vertical gardens created with Lands Design.'
  },
  forestry: {
    url: 'https://stg.lands-design.com/wp-content/uploads/2020/01/forestry-enscape.png',
    alt: 'A model of low hills populated with a forest in front of the sea created with Lands Design.'
  },
  urbanPlanning: {
    url: 'https://stg.lands-design.com/wp-content/uploads/2019/12/urban-planning.jpg',
    alt: 'Public space project created with Lands Design for a public space with play area, benches and trees.'
  },
  cgArtists: {
    url: 'https://stg.lands-design.com/wp-content/uploads/2019/12/cg-artists.jpg',
    alt: 'View of the Villa Savoye project with its green area around created with Lands Design.'
  },
  // WHY LANDS (gifs)
  lim: {
    url: 'https://stg.lands-design.com/wp-content/uploads/2020/01/limPoster.png',
    alt: 'One of the main Lands Design features is the possibility to model with smart objects that have 3D and 2D representation and embedded information.'
  },
  terrains: {
    url: 'https://stg.lands-design.com/wp-content/uploads/2020/01/terrainsPoster.png',
    alt: 'Lands Design terrains can be imported or created from points or curves. Also they can be reshaped based on cut and fills, paths and divisions.'
  },
  collaboration: {
    url: 'https://stg.lands-design.com/wp-content/uploads/2020/01/interoperability.png',
    alt: 'Diagram indicating the most important file formats with which Lands Design can communicate.'
  },
  plants: {
    url: 'https://stg.lands-design.com/wp-content/uploads/2020/01/plants.jpg',
    alt: 'Examples of the species in the Lands Design huge plant database which include 3D and 2D representations and change of season.'
  },
  documentation: {
    url: 'https://stg.lands-design.com/wp-content/uploads/2020/01/documentation.png',
    alt: 'Example of a landscape project layout created with Lands Design.'
  },
  parametric: {
    url: 'https://stg.lands-design.com/wp-content/uploads/2020/01/parametric.png',
    alt: 'Examples of custom landscape parametric design workflows with Grasshopper and Lands Design.'
  },
  presentation: {
    url: 'https://stg.lands-design.com/wp-content/uploads/2020/01/presentation.jpg',
    alt: 'Render of the Villa Arcipelago by Gianni Botsford with the plants created with Lands Design'
  },
  // PLATFORMS
  logoRhino: {
    url: 'https://stg.lands-design.com/wp-content/uploads/2019/12/RhinoHead.png',
    alt: 'A 3D model of a rhino head representing the Rhinoceros3D logo.'
  },
  logoAutocad: {
    url: 'https://stg.lands-design.com/wp-content/uploads/2019/11/autocad-logo.png',
    alt: 'A red capital letter A representing the AutoCAD logo.'
  }
}

// REGEXP REPLACEMENT LOGIC:
const regexp = /replaceSrc="([a-zA-Z]+)".+?(src="[^"]+")(?:\s+?(alt="[^"]*"))?/g;

function replacer(match, p1, p2, p3) {
  return p2.replace(/src="[^"]+"/, 'src="' + replacers[p1].url + '"') + (p3 ? ' alt="' + replacers[p1].alt + '"' : '');
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