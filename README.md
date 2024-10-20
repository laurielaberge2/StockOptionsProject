# Stock options lookup 🐈‍🐈‍

Developed by Laurie Laberge in October 2024

Notes: 
* This was only tested on Android as I do not have a Mac or an iPhone
* I intended to implement i18n but didn't have the time

## Installation

Make sure you have a compatible Android device or emulator set up

In project root:
```bash
npm install
```

In folder /android/app:
```bash
keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
```

In project root:
```bash
npx expo run:android
```

Press 'a'

Choose development server if prompted

## Testing
```bash
npm run test
```

## License

[MIT](https://choosealicense.com/licenses/mit/)