import fetch from 'node-fetch';
import Fuse from 'fuse.js';

/**
@param an emoji
@returns a promise on the SVG code
*/
export async function fetchSVG(emoji) {
  const r = await fetch(`https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/${emoji.item.hexcode}.svg`);
  return await r.text();

}


/**
@returns a promise on an array containing all the emojis
**/
async function fetchAllEmojis() {
  const r = await fetch(`https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/data/openmoji.json`);
  return await r.json();
}

/**
@param searchString
@returns a promise on an array containing all the emojis that match the searchString
**/
export async function fetchEmojis(searchString) {
  const emojis = await fetchAllEmojis();
  const options = {
    // isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    threshold: 0.2,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    keys: ["tags"]
  };

  const fuse = new Fuse(emojis, options);
  return fuse.search(searchString);
}


/**
Example:

fetchEmojis("apple").then(json => console.log(json));
fetchEmojis("apple").then(json => fetchSVG(json[0]).then(svgCode => console.log(svgCode)));
**/



