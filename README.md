# coffeeroasters-subscription-site

### Table of Contents

- [Prerequisites](#Prerequisites)
- [Tech Stack](#Tech-Stack)
- [Getting Started](#Getting-Started)
- [Project Structure](#Project-Structure)
- [Deployment](#Deployment)

#

### Prerequisites

- Node JS @16.X and up
- npm @8 and up
- typescript @4 and up

#

### Tech Stack

- React @18.2.0 - front-end framework
- Tailwind @3.2.4 - CSS framework
- react-router @6.6.1 - Declarative routing for React apps at any scale

#

### Getting Started

1. First of all you need to clone app repository from github:

```
git clone https://github.com/nikanoza/coffeeroasters-subscription-site
```

2. Next step requires install all the dependencies.

```
npm install
```

3. To see project in action

```
npm run dev
```

#

### Project Structure

```
|--- src
|   |--- assets
|   |---|--- # images
|   |--- components # reusable components
|   |---|--- index.ts # export all components
|   |--- hooks # custom hooks folder
|   |--- layouts # layout components
|   |--- pages # page components folder
|   |--- svg # svg components folder
|   - types.d.ts # types definition file
- package.json     # dependency manager configurations
```

#

### Deployment

Before every deployment you need to create build file.

```
npm run build
```

after this you can use this file to deploy project on server.

#
