import { combineReducers } from "redux";

const songReducer = () => {
  return [
    {
      name: "STAY",
      length: "2:50",
      art: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/The_Kid_Laroi_and_Justin_Bieber_-_Stay.png/220px-The_Kid_Laroi_and_Justin_Bieber_-_Stay.png",
    },
    {
      name: "Heat Waves",
      length: "3:20",
      art: "https://upload.wikimedia.org/wikipedia/en/b/b0/Glass_Animals_-_Heat_Waves.png",
    },
    {
      name: "Light Switch",
      length: "3:05",
      art: "https://upload.wikimedia.org/wikipedia/en/2/2a/Charlie_Puth_-_Light_Switch.png",
    },
    {
      name: "Blinding Lights",
      length: "3:24",
      art: "https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png",
    },
  ];
};

const selectSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectSongReducer,
});
