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
- precise vs imprecise location
  - there is no API to know in which mode the user is
  - imprecise: you get an accuracy of 3000 to 9000 metres (2-6 miles)
  - imprecise is smart enough not to cross country borders

Screen Orientation API

- knowing if you are in portrait or landscape
- currently light green support
- `screen.orientation.lock()` locks the screen orientation
- arguments: any, natural, portrait-primary, portrait-secondary (upside down), landscape-primary, landscape-secondary, portrait, landscape

Touch Events

- mouse events are not good enough (click, hover, etc)
- touch events have more than one pointer
- mouse pointer never goes away whereas touch does
- touch events have pressure and angle
- API: touchstart, touchend, touchcancel (touch event gets interrupted), touchmove (drag)
- touch events are patented by Apple

Pointer Events

- implemented as a counter to touch events and now also used by Apple
- typically have both touch events and pointer on most phones
- works with mouse, trackpad, pen, stylus etc
- API: pointerdown, pointerup, pointercancel, pointerover pointerout (hover), pointermove pointerenter pointerleave (drag)
- event receives coordinates, pointer id, pointer type, optional pressure, tilt, twist data (if available)

Virtual Keyboard

- waiting for Apple to implement this API
- can't detect virtual keyboard, how much space it takes up etc
- API: navigator.virtualKeyboard
- has CSS env variables for styling around keyboard (margin, padding)

Gamepad API

- high level API, works with any gamepad
- low latency
- works with bluetooth and USB, API doesn't care
- works with requestAnimationFrame

Web HID

- not available in safari
- human interface device
- can be connected via usb or bluetooth
- provides users with control over which devices web apps can access
- user must grant permission for it to be used
- low-level API: you have a lot of power and a lot of work
- connects to non-standard input/output devices. stream deck, pedals, LED lights etc
