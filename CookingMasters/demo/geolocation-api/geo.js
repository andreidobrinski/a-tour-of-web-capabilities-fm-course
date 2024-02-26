function start() {
  // geolocation API
  if ("geolocation" in navigator) {
    // get information once
    // navigator.geolocation.getCurrentPosition(

    // continuees to listen for new positions
    navigator.geolocation.watchPosition(
      (position) => {
        console.log(position);
        document.querySelector(
          "output"
        ).textContent = `Lat: ${position.coords.latitude} lon: ${position.coords.longitude}`;
      },
      (error) => {
        console.log(error);
      },
      // only available for watchPosition
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000,
      }
    );
  }
}
