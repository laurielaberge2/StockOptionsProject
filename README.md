# Stock options lookup

Developed by Laurie Laberge in October 2024

Note: This was only tested on Android as I do not have a Mac or an iPhone

## Installation

Make sure you have a compatible Android device or emulator set up
 
```bash
npm install
```

In folder /android/app:
```bash
keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
```

```bash
npx expo run:android
```

Press 'a'

Choose development server if prompted

## License

[MIT](https://choosealicense.com/licenses/mit/)