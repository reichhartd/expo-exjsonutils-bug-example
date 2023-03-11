# Expo EXJSONUtils bug example

## Bug example

1. `npm run prebuild`
2. `npm run start`
3. `npm run ios`
4. Press `Start video ident`
5. App is crashing

## Working example

1. Uninstall `expo-updates` and remove `expo-updates` from `plugins` from the `app.json`
2. Follow the same steps as the [Bug example](#bug-example)
3. Get the message `Rejected: {"resultCode": "FAILED", "errorMessage": "Your Ident-ID is not correct. Please check and try again."}` (Connection to the native iOS part is working)
