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
