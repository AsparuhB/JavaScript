function timesPlayed(bandName, albumName, songName) {
  let songRotation = (albumName.length * bandName.length * songName.length) / 2;
  console.log(`The plate was rotated ${Math.ceil(songRotation / 2.5)} times.`);
}

timesPlayed('Black Sabbath', 'Paranoid',
'War Pigs');
