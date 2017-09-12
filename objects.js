var playlist = new Object();

playlist.Kanye = 'school spirit';

function updatePlaylist(playlist,artistName,songTitle){
   playlist.artistName = songTitle;
   return playlist
}

function removeFromPlaylist(playlist,artistName){
  delete playlist.artistName;
}
