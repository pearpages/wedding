# Wedding Project

|TODO|
|---|
|- Fix location gmaps|
|- Review translations|
|- Multilanguage translations|
|- Persist forms|
|- Persist messages and send confirmation email -donotreply-|

---

|Contents|
|---|
|[Services](##Services)|
|[Theme](##Theme)|
|[Translations](##Translations)|
|[Tricks and Hacks](##Tricks&nbsp;and&nbsp;Hacks)|
|[Create React App](##Create&nbsp;React&nbsp;App)|

---

## Services

| Feature     | Service                                                    |
| ----------- | ---------------------------------------------------------- |
| Domain      | https://www.godaddy.com/                                   |
| Email       | https://www.mailgun.com/                                   |
| CDN         | Fastly, AWS S3, AWS CloudFront and https://cloudinary.com/ |
| DNS         | https://www.cloudflare.com/                                |
| Backend     | https://www.heroku.com/                                    |
| FE hosting  | https://www.heroku.com/                                    |
| Persistance | Heroku MongoDB mLab                                        |

---

## Tricks and Hacks

Load jquery 1.11 from CDN asap. Check *index.html* file.

```
https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.min.js
```

---

## Theme

[Wedding Bells - Responsive Html Template
](https://themeforest.net/item/wedding-bells-responsive-wedding-template/9332159)
[Theme preview](http://preview.themeforest.net/item/wedding-bells-responsive-wedding-template/full_screen_preview/9332159)

---

## Translations

```ts
import React, { useContext } from "react";

import { Texts } from "types";
import { TextContext } from "core";

const texts: Texts = useContext(TextContext);
```

---

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
