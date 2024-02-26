Notes

Permissions and security

- some permissions are harmless and have no cost
- others open a privacy risk and have a cost
- each browser decides how to implement permissions for certain features, via a permission dialog
- sometimes the permissions involve user engagement requirements (for eg using background sync)
- most capabilities require HTTPS
- some capabilities need a user interaction to be enabled; cant request the permission on page load
- if a user denies permission, the API won't be able to ask again. Manual re-enable will be required
- permission granted may have a time limit for how long the capability can be used

Permissions policy spec

- previously known as feature policy
- it's a HTTP header: `Permissions-Policy`
- for iframe, it's an HTML attribute

Permissions API

- `const response = await navigator.permissions.query({ name: "geolocation" })`
- `const state = response.state`
- can be 'granted', 'prompt', or 'denied'

Sensors

- there are different sensors on devices
  - accelerometer (3 axis)
  - gyroscope
  - magnetometer
  - proximity (proximity to the user)
  - light sensor
- there are two ways to consume them on the web
  - old APIs (global DOM APIs). Works on iPhones
  - Sensor API. Not yet in Safari

Available Sensors

- AbsoluteOrientationSensor
- Accelerometer
- AmbientLightSensor
- Gravity Sensor
- Gyroscope
- LinearAccelerationSensor
- Magnetometer
- RelativeOrientationSensor

Acceletometer, Magnetometer and Gyroscope are the most mature APIs for use

Android

- OrientationPhone
- 360 degree

Geolocation API

- uses Wifi for desktop browser location
- google knows because of street view cars that have wifi antennas and match location to wifi SSID and GPS. They also know from users reporting new access points
- same works for phone because it's faster and cheaper than GPS
- walking around, google maps uses wifi for location tracking
- geolocation API is provider-agnostic, we don't know how we're getting the information
- works only in the foreground (native can work in the background)
  - therefore not suitable for geofencing or beacon-based location
