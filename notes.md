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

Speech Recognition API

- works on safari after a user gesture
- requires permission
- you get transcribed text with a percentage of confidence
- does multiple languages. language support depends on the browser and the OS
- API is prefixed with webkit: `webkitSpeechRecognition()`

Speech Synthesis API

- API: new SpeechSynthesisUtterance()
- each browser has a different list of voices they can use

Barcode Detector, Face Detector, Text Detector

- chrome and android only
- `const detector = new BarcodeDetector()`
- not on iOS or desktop

Media Devices

- they have to do with the camera
- gets a stream that is coming from the camera

Advanced control camera

- camera PTZ, pan tilt zoom
- can be used to adjust input stream for live streaming or for taking photos
- useful for mixing with UI controls

Augmented Reality

- webXR API, available in chromium browser but safari is experimental

Screen Wake Lock API

- available in chrome and safari
- asks the OS not to lock the screen while the app is in the foreground
- `navigator.wakeLock.request()`

Web Bluetooth API

- safari and firefox have not implemented it and likely won't
- Brave also removed bluetooth from chromium
- The API lets us: scan for BLE devices, scan services available (each device can expose services and those services expose IDs), connect to these services, send and receive data (through something known as a characteristic)
- it is a low level API
- cannot connect to bluetooth FTP or audio
- need to manipulate binary data
- need to understand the device's communication protocol

Web Audio API

- generate dynamic audio
- 3d sound
- can be used for ultrasound communication between devices
- library: SonicSocket, used for ultrasound networking
- chromecast uses ultrasound to know that it's near

Web MIDI API

- low level API
- use to connect to music devices and some lightning systems
- firefox implemented but not safari
- receive and send MIDI messages

Web Serial API

- low level
- communicate with serial devices with USB, blutooth or other serial connections
- not a lot of use cases
- send and receive data

Web USB

- targetted to device vendors, not developers
- also low level API
- read and write data directly without custom drivers
- not often used
- chromium only
- requires permission to use

Vibration

- window.navigator.vibrate(300)
- allows you to vibrate the phone

Battery status

- navigator.getBattery()
- can get the current battery level and whether or not the device is charging, and how long it would take to be fully charged
- not available in safari or firefox
- can work with a PWA and must go through the app store

Idle detection

- know if the user is still there or not
- used in chat applications

Web NFC

- only works on chrome
- tap to pay, share, etc
- similar to what you can get with a QR code
- access within 5-10cm
- limited only to NDEF spec, simplest protocol we have for NFC
- low level operations are not possible
