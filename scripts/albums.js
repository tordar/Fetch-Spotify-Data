const endpoint = './YourLibrary.json';
const albumName = [];
const albumsOutput = document.querySelector('.albums');


async function fetchAlbums() {
    const response = await fetch(endpoint);
    // waits until the request completes...
    const newJson = await response.json()
    console.log(newJson);
    console.log(newJson.albums)
    for(let i = 0; i<newJson.albums.length; i++){
        var album = document.createElement("div");
        album.innerHTML = 'Album: ' + newJson.albums[i].album + ' / Artist: ' + newJson.albums[i].artist
        albumsOutput.appendChild(album)
        album.classList.add('card')
    }
}
fetchAlbums()
