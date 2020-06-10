import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'All Star', duration: '4:01' },
    { title: 'El Juego Verdadero', duration: '3:02' },
    { title: 'Bachata Rosa', duration: '4:40' },
    { title: 'Changes', duration: '2:55' },
    { title: 'Bohemian Rhapsody', duration: '6:23' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
