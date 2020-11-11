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

**Option 1** (Windows only)

Open the PowerShell file *build.ps1* and run it from VSCode. You may need the PowerShell plugin installed.

**Option 2**

Run the contents in *build.ps1* in your terminal.

**Result**

The HTML and CSS files will be in the dist folder.
