# Aircall Podcast Page

## Table of Contents
- [Aircall Podcast Page](#aircall-podcast-page)
  - [Table of Contents](#table-of-contents)
  - [Development and Contributing](#development-and-contributing)
  - [Prerequisites](#prerequisites)
  - [View the live version](#view-the-live-version)
  - [Project Figma](#project-figma)
  - [Project Requirements](#project-requirements)
    - [Must Haves](#must-haves)
    - [Nice to Haves](#nice-to-haves)
    - [Soft Requirements](#soft-requirements)
  - [Future Improvements](#future-improvements)
- [Design Specs](#design-specs)
  - [Testing and Quality](#testing-and-quality)
  - [Handoff](#handoff)

## Development and Contributing

First, clone the repository to your local drive:

```bash
git clone git@github.com:wongstephen/podcast-page.git
```

Then, enter the folder:

```bash
cd ./podcast-page
```

Then, install project dependencies:

```bash
yarn install
```

Finally, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Alternatively, if you prefer docker. You can run the following command to start the development server:

```bash
docker compose up -d
```

This will start the application in a Docker container, and you can access it at [http://localhost:3300](http://localhost:3300).

To stop the Docker container:

```bash
docker compose down
```

## Prerequisites

- Node.js >= 18.17
- Yarn 1.22.x
- Docker (optional, for containerized development)
  
## View the live version

You can view the live version of the podcast page at [https://podcast-page-five.vercel.app](https://podcast-page-five.vercel.app) or [https://wongstephen.github.io/podcast-page/](https://wongstephen.github.io/podcast-page/).

## Project Figma

[https://www.figma.com/design/76YdaEzpF76GSQBNyWk5Pi/Podcast-page?no
de-id=1124-4613&p=f&t=rcoIts7E15hfYOHq-0](https://www.figma.com/design/76YdaEzpF76GSQBNyWk5Pi/Podcast-page?node-id=1124-4613&p=f&t=rcoIts7E15hfYOHq-0)

## Project Requirements

### Must Haves

- [x] Translate visual design to code
- [x] Responsive design
  - [x] Desktop: Page "podcast - 01"
  - [x] Mobile: "Breakpoint_sm"
- [x] SEO-friendly
- [x] Completion date 8/4/2025
- [x] Documentation
- [x] Deployment
  - [x] Deploy to Github Pages
  - [ ] 45-minute technical discussion with an Engineer and/or Engineering Manager
  - [ ] 30-minute non-technical presentation with the Chief Marketing Officer and Director of Performance Marketing

### Nice to Haves

- [x] Use Next.js
- [x] Use TypeScript
- [x] Accessibility
- [x] Deployment to Vercel
- [x] Unit testing with Jest
- [x] Visual testing on various devices and browsers
- [ ] Internationalization
- [ ] Use Storyblok CMS
- [ ] Use Storybook for UI components
- [ ] Integration testing with Playwright

### Soft Requirements

- [x] Code quality
- [x] Quality Control
  - [x] Linting with Eslint
  - [x] Formatting with Prettier
  - [x] CI/CD pipeline
  - [x] Pin dependencies
- [x] Developer Experience
  - [x] Dockerization for development

## Future Improvements

- [ ] Internationalization
- [ ] Integration with StoryBlok CMS
- [ ] Add Storybook for UI components
- [ ] Integration testing with Playwright
- [ ] Review design system and consolidate components

# Design Specs

Figma design link: [Podcast Page Design](https://www.figma.com/design/76YdaEzpF76GSQBNyWk5Pi/Podcast-page?node-id=1124-4613&p=f&t=rcoIts7E15hfYOHq-0)

## Testing and Quality

Unit tests are written using Jest and can be run with the following command:

```bash
yarn test
```

Linting is enforced using ESLint. You can run the following commands to check for linting errors:

```bash
yarn lint
```

Responsiveness: Visual testing is performed using the service LambdaTest, which outputs visual snapshots of the application across various devices and browsers.

Quality: Code is tested and linted automatically in the CI/CD pipeline, ensuring code quality and consistency.

Tracking: Scripts are loaded to Google Tag Manager or similar service such as Mantomo. The should be configured to track page views, clicks, and other relevant events. In addition, each script including Google Analytics, Facebook Pixel, or other tracking scripts should be documented in the project with details on their purpose and when they should expire.

Pagespeed: The application is optimized for performance, with a focus on fast loading times and efficient resource usage. Tools like Lighthouse can be used to audit the performance of the application. The application aims to serve and render the content server-side when possible. In addition, care is spend to reduce the size of images and other assets, ensuring that they are optimized for web delivery. Other attention is given to the use of caching and other performance optimization techniques to ensure that the application loads quickly and efficiently.

## Handoff

Documentation for the project is available in the `docs` folder. It includes details on how to set up the project, run tests, and deploy the application.

Dockerization is set up for development, allowing you to run the application in a containerized environment. The Dockerfile and docker-compose.yml files are included in the project root.

Folders are organized in a way that separates components, pages, and styles, making it easier to navigate and maintain the codebase.

`/src/app` contains the main application logic, including pages and components.
`/src/lib/components` holds reusable UI components.
`/src/lib/utilities` contains helper functions and utilities, including adapters for services and formatting.
`/public` is used for static assets like images and icons.
`src/lib/mockData` contains mock data used for testing and development purposes.

Review CI/CD configurations in the `.github/workflows` directory to understand how the project is built, tested, linted and deployed automatically.

Shared environment variables are managed in the `.env` file, which is not included in the repository for security reasons. They are shared with services such as Passwordless.

Decisions are documented and tracked in project management folders.

Access to repo and relevant services (Cloudinary, AWS, Vercel, etc) will be granted to the team members as needed.
