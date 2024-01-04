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
