var playist = new Object();

playist.kanye = 'school spirit';

function updatePlaylist(playlist,artistName,songTitle){
   return Object.assign({}, playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist,artistName){
  delete playlist.artistName;
}
