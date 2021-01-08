# Lands Design website landing page

Main files:
- index.html - *the html, only the fragment between the EXTRACT words will be built.*
- homeStyle.scss

Secondary files:
- homeStyleExtra.css - web site general styles that affect the page to match the production env.

**Important**: In the HTML file the 'alt' attributes for images, if added, must follow the 'src' attribute to be replaced successfully during the build process with the data in build.js.

This requires NodeJS and Dart SASS installed globally (it might work with other SASS engines).

## Development

1 - Serve the files in the 'src' folder

2 - Run SASS in watch mode: `sass --watch --no-source-map src/homeStyleSrc.scss src/homeStyle.css`

## Build

Stop the SASS watch mode if active.

**Option 1** (Windows)

Run the *build.ps1* file from PowerShell: `.\build.js`

**Option 2** (Unix)

Run the *build.sh* file from the shell: `sh build.sh`

**Result**

The final HTML and CSS files will be in the 'dist' folder.
