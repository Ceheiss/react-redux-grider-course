// Action creator
export const selectSong = (song) => {
  // return an action (type is required, payload is optional)
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};
