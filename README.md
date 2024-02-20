# MeowPedia: Discover Feline Wonders!

Welcome to MeowPedia, your go-to destination for exploring adorable cat images alongside fascinating details about their breed types, origins, and descriptions. Powered by Vite and React, and enhanced with the efficiency of React Query, responsive website ensures seamless browsing across all devices.

With MeowPedia, delight in an endless stream of cat images through our intuitive infinite scroll feature, dynamically loading content as you explore. Looking for something specific? Our advanced filtering functionality allows you to narrow down results effortlessly by breed type, making it easier than ever to find your favorite feline companions.

Backed by rigorous testing with vitest and testing-library/react, MeowPedia guarantees a smooth and reliable user experience, ensuring that every interaction with our platform is nothing short of purrfection. Dive into the world of cats today with MeowPedia, where every click brings you closer to discovering the wonders of the feline kingdom!

## Features

- Cat Image Display: The app showcases a collection of cat images, allowing users to browse through a visually appealing gallery of adorable feline companions.
- Cat Information:
  - Breed Type: Each cat image is accompanied by detailed information about its breed type, providing users with insights into the diverse range of cat breeds.
  - Origin: Users can learn about the origins of each cat breed, gaining a deeper understanding of their cultural and geographical backgrounds.
  - Description: The app presents descriptions for each cat breed, offering users additional context and characteristics to further appreciate the uniqueness of each feline.
- Filter by Breed Type: Users can filter the displayed cat images based on specific breed types, allowing them to easily find images of their favorite cat breeds or explore new ones.
- Infinite Scroll: The app implements an infinite scroll feature, enabling continuous loading of cat images as users scroll down the page, ensuring a seamless and uninterrupted browsing experience.
- The loading screen features a skeleton element to underscore to the user that the app is in the process of loading content.
- In-built scroll-to-top feature becomes visible when the user has scrolled down and the search bar is not in view.

## Tech

`cat-breed-app` uses a number of open source projects to work properly:

- [React]
- [Typescript]
- [Vite]
- [React Query]
- [react-infinite-scroll-component]
- [Vitest]
- [React Testing Library]

## Installation and Usage

`cat-breed-app` requires [Node.js](https://nodejs.org/) v18+ to run.

Install the dependencies and devDependencies and start the server.

```sh
npm i
```

For development environments...

```sh
npm run dev
```

**App uses environment variables for fetching the images.**
Following environment variables must be configured before starting the app:

- VITE_BASE_URL
- VITE_API_KEY
- VITE_API_LIMIT

For production environments...

```sh
npm run build
```

Execute test cases:

```sh
npm test
```

For coverage:

```sh
npm run coverage
```

At the moment, code coverage is:

- Statements: 85%
- Branch: 90%
- Functions: 84%
- Lines: 85%

## Improvement ideas

- Zoom on images.
- Show more information of a picture on a new page, with bigger images, when image has information.
- Adding husky prehook plugin to check code coverage before push to remote.
- Creating github pipeline to build the application and upload it to AWS.
- Display a placeholder for the search field when the app is unable to request breed types.
- Implementing a notification for users when they switch to offline.

  [React]: https://react.dev/
  [Typescript]: https://typescriptlang.org/
  [Vite]: https://vitejs.dev/
  [React Query]: https://tanstack.com/
  [react-infinite-scroll-component]: https://www.npmjs.com/package/react-infinite-scroll-component
  [Vitest]: https://vitest.dev/
  [React Testing Library]: https://testing-library.com/
