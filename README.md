# openmoji-fetch

Fetch openmoji metadata and svg

## Usage

Get the list of all emojis corresponding to "apple":
       ``fetchEmojis("apple").then(json => console.log(json));``

Get the SVG code of the first emoji corresponding to "apple":
      ``fetchEmojis("apple").then(json => fetchSVG(json[0]).then(svgCode => console.log(svgCode)));``
