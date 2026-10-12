<<<<<<< HEAD
# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

### Other setup steps

- To set up ESLint for linting, run `npx expo lint`, or follow our guide on ["Using ESLint and Prettier"](https://docs.expo.dev/guides/using-eslint/)
- If you'd like to set up unit testing, follow our guide on ["Unit Testing with Jest"](https://docs.expo.dev/develop/unit-testing/)
- Learn more about the TypeScript setup in this template in our guide on ["Using TypeScript"](https://docs.expo.dev/guides/typescript/)

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
=======
# Christoffel's Kitchen Menu Manager

MAST5112 Part 2 — lets the chef add a dish (name, description, course, price) and see
every dish that's been added. No editing, deleting, searching, or filtering yet — that's
for the Final POE.

## Setup

1. Open this folder in VS Code.
2. Open a terminal in VS Code (`` Ctrl+` ``) and run:

   ```
   npm install
   ```

3. Start the app:

   ```
   npx expo start
   ```

4. Press `w` to open it in a browser, or scan the QR code with the Expo Go app on your
   phone.

**Avoid running this from inside a OneDrive-synced folder** if you can — OneDrive tries
to sync `node_modules` in real time, which causes file-lock errors. Copy the folder to
somewhere local (e.g. `C:\Dev\christoffels-kitchen`) first if that's where you are now.

## What's in here

```
app/
  _layout.tsx      root layout, wraps the app in MenuProvider and sets up navigation
  index.tsx        home screen — shows the menu list or an empty-state message
  add-dish.tsx      form screen — captures a new dish, with validation
  menuContext.tsx   shared state: the list of dishes and the function to add one
package.json
app.json
tsconfig.json
```

## Colour palette

Warm brown and gold, matching the Christoffel's Kitchen branding:

- `#3E2723` — dark brown, titles and body text
- `#5D4037` — medium brown, header bar and Save button
- `#C89B3C` — gold, Add button, prices, accents
- `#FFF8E7` — cream, background
- `#B71C1C` — red, validation errors only
>>>>>>> 402a1bcd604a9f16987a4f161810dd2ec0948f24
