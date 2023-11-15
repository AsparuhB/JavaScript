function timesPlayed(bandName, albumName, songName) {
  let songTime = (albumName.length * bandName.length * songName.length) / 2;
  let rotations = Math.ceil(songTime / 2.5);
  console.log(`The plate was rotated ${rotations} times.`);
}

timesPlayed("Black Sabbath", "Paranoid", "War Pigs");
