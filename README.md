# GDate

![Screenshot of GDate](doc/screenshot.webp)

A fake dating app, built for a humourous presentation involving some live-coding on "How to build an app and get rich".

What's been implemented:

- Splash screen; "Log in" link does nothing, but "Sign up" does.
- Registration page (although the interest selectors don't do anything).
- See profiles and choose No or Yes (super-swipe not implemented).
  - Choosing No goes to the next profile.
  - Choosing Yes brings up a messaging screen with a faked conversation. Replying will trigger more fake messages.
- A little surprise when you try to arrange a date... ;)

What could be improved:

- Pre-load profile images to avoid delay when swiping to next profile. (When doing the presentation, I ran through it once beforehand to ensure the images were loaded).
- Swiping animation.
- Design tweaks.
- Feedback when reaching end of swipe queue and end of fake messages.
- Unit test coverage started off well but wasn't kept up as it got closer to the deadline...

## Live coding

Part of the presentation was: we can't have _some loser_ show up first! That won't make a great first impression for new members. We'd like to show the _most attractive_ people first. We need... an **algorithm**!!

The placeholder to implement this is in [get-profile-queue-algorithm.ts](apps/frontend/queue/get-profile-queue/get-profile-queue-algorithm.ts).

## How to run locally

`nx` can be installed globally for convenience:

```
npm install -g nx
```

Then install and run the project:

```
npm i
nx serve
```

## NX default stuff

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@app-pres/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
