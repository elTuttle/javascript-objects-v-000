var playist = {Kanye: 'School Spirit'}

function updatePlaylist(playlistObject,artistName,songTitle){
   return Object.assign({}, playlistObject, {[artistName]: songTitle})
}

function removeFromPlaylist(playlistObject,artistName){
  delete playlistObject.artistName;
}
