
const endpoint = 'https://gist.githubusercontent.com/tordar/35eb217638fa1496124d39f2aca66cd2/raw/3a4e605ad67f63822f242f113f21108046f813e6/StreamingHistory0.json';

const artistName = [];



fetch(endpoint)
.then(blob => blob.json())
.then(data => artistName.push(...data))
console.log(artistName)

function findMatches(wordToMatch, artistName) {
    return artistName.filter(place => {
        // Figure out if artist matches what was searched
        const regex = new RegExp(wordToMatch, 'gi');
        return place.artistName.match(regex)
    });
}
/* 
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
 */
function displayMatches() {
    const matchArray = findMatches(this.value, artistName);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.artistName.replace(regex, `<span class="h1">${this.value}</span>`);
        return `
        <li>
          <span class="name">${cityName}</span>
          <li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}

// Set a limit to how many matches can be displayed
// Only one match per search
// Switch between songs and artists

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
