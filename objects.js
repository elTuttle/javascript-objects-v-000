var playist = {Kanye: 'School Spirit'}

function updatePlaylist(playlist,artistName,songTitle){
   return Object.assign({}, playlistObject, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist,artistName){
  delete playlistObject.artistName;
}
