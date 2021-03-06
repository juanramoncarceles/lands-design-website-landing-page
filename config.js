module.exports = {
  // COMPRESS THE RESULTING HTML
  compress: false,

  /* SRC ATTRIBUTES CONTENT TO REPLACE
    The name of the field should be the same as the value of the 'replaceSrc' attribute in the HTML element.
    Example:
      test: {
        url: 'https://www.finalurl.com/resource.jpg',
        alt: 'Whatever alternative text'
      }
      Would be applied to:
        <img replaceSrc="test" src="./imgs/local-placeholder.jpg" alt="">
      And the result would be:
        <img src="https://www.finalurl.com/resource.jpg" alt="Whatever alternative text">
  */
  replacers: {
    // BANNER
    bannerOne: {
      url: 'https://stg.landsdesign.com/wp-content/uploads/2020/02/lands-banner-1.jpg',
      alt: 'Lands Design project of a pond surrounded by a park with a pathway in front of the water.'
    },
    bannerTwo: {
      url: 'https://stg.landsdesign.com/wp-content/uploads/2020/02/lands-banner-2.jpg',
      alt: 'Lands Design project of a park with pathways, green areas and a big blue art structure.'
    },
    bannerThree: {
      url: 'https://stg.landsdesign.com/wp-content/uploads/2020/02/lands-banner-3.jpg',
      alt: 'Lands Design project of a garden with small organized plants and trees.'
    },
    // MAIN VIDEO
    mainVideo: {
      url: 'https://stg.landsdesign.com/wp-content/uploads/2019/12/LandsPromo-Q35-M.mp4'
    },
    // HOW IS LANDS USED
    landscapeArch: {
      url: 'https://stg.landsdesign.com/wp-content/uploads/2019/12/big-park.jpg',
      alt: 'Bird\'s eye view of the Canal Park project created with Lands Design. Big green areas mixed with water areas.'
    },
    greenInfrastructure: {
      url: 'https://stg.landsdesign.com/wp-content/uploads/2020/02/green-infrastructure.jpg',
      alt: 'View of a viaduct covered with vertical gardens created with Lands Design.'
    },
    forestry: {
      url: 'https://stg.landsdesign.com/wp-content/uploads/2020/01/forestry-enscape.png',
      alt: 'A model of low hills populated with a forest in front of the sea created with Lands Design.'
    },
    urbanPlanning: {
      url: 'https://stg.landsdesign.com/wp-content/uploads/2019/12/urban-planning.jpg',
      alt: 'Public space project created with Lands Design for a public space with play area, benches and trees.'
    },
    cgArtists: {
      url: 'https://stg.landsdesign.com/wp-content/uploads/2019/12/cg-artists.jpg',
      alt: 'View of the Villa Savoye project with its green area around created with Lands Design.'
    },
    // WHY LANDS (videos)
    lim: {
      url: 'https://stg.landsdesign.com/wp-content/uploads/2020/02/LandsBIM-600.mp4',
      // alt: 'One of the main Lands Design features is the possibility to model with smart objects that have 3D and 2D representation and embedded information.'
    },
    terrains: {
      url: 'https://stg.landsdesign.com/wp-content/uploads/2020/02/LandsTerrainOperations-600.mp4',
      // alt: 'Lands Design terrains can be imported or created from points or curves. Also they can be reshaped based on cut and fills, paths and divisions.'
    },
    collaboration: {
      url: 'https://stg.landsdesign.com/wp-content/uploads/2020/02/LandsInteroperability-600.mp4',
      // alt: 'Diagram indicating the most important file formats with which Lands Design can communicate.'
    },
    plants: {
      url: 'https://stg.landsdesign.com/wp-content/uploads/2020/02/LandsPlantsDatabase-600.mp4',
      // alt: 'Examples of the species in the Lands Design huge plant database which include 3D and 2D representations and change of season.'
    },
    documentation: {
      url: 'https://stg.landsdesign.com/wp-content/uploads/2020/02/LandsDocumentation-600.mp4',
      // alt: 'Example of a landscape project layout created with Lands Design.'
    },
    parametric: {
      url: 'https://stg.landsdesign.com/wp-content/uploads/2020/02/LandsParametricDesign-600.mp4',
      // alt: 'Examples of custom landscape parametric design workflows with Grasshopper and Lands Design.'
    },
    presentation: {
      url: 'https://stg.landsdesign.com/wp-content/uploads/2020/02/LandsRenderVideo-600.mp4',
      // alt: 'Render of the Villa Arcipelago by Gianni Botsford with the plants created with Lands Design'
    },
    // PLATFORMS
    logoRhino: {
      url: 'https://stg.landsdesign.com/wp-content/uploads/2019/12/RhinoHead.png',
      alt: 'A 3D model of a rhino head representing the Rhinoceros3D logo.'
    },
    logoAutocad: {
      url: 'https://stg.landsdesign.com/wp-content/uploads/2019/11/autocad-logo.png',
      alt: 'A red capital letter A representing the AutoCAD logo.'
    },
    // NEWS
    news: {
      url: 'https://stg.landsdesign.com/wp-content/uploads/2020/12/Lands_Design_Inside_Revit.jpg',
      alt: 'Two 3D models of a terrain with trees, on the left Lands Design and on the right the same model in Revit to demonstrate the integrations between the two software.'
    },
    // PROJECTS
    projects: {
      url: 'https://stg.landsdesign.com/wp-content/uploads/2020/11/Agriculture-Educational-and-Culture-Center-by-Amr-Lail.jpg',
      alt: 'Rendered aerial view of the Agriculture Educational and Culture Center model created with Rhino and Lands Design by Amr Lail.'
    }
  }
}