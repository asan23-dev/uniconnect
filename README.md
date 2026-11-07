# UniConnect — University Community Platform

A responsive React + JavaScript university community application built with Vite.

## Features
- Dashboard with community activity and upcoming events
- Community discovery, search, categories, join/leave membership
- Social feed with post creation, likes, comments and filters
- Events discovery and RSVP interactions
- Student directory and study partner discovery
- Student profile with editable interests and bio
- Notifications panel and responsive mobile navigation
- Persistent demo interactions using browser localStorage

## Run locally
1. Install Node.js (18+ recommended).
2. Extract this ZIP.
3. Open a terminal in the `uniconnect` folder.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
Run `npm run build`. The deployable output is generated in `dist/`.

## Demo account
The app opens directly in a demo student session as **Kemi Esther**. No real authentication or backend is configured. Data is seeded locally and changes persist in the current browser through localStorage. Use the profile page to edit the demo profile.

## Technology
React 18, JavaScript (ES6+), Vite, React Router, Lucide React and CSS.


## Deploy to Vercel
1. Push the extracted project folder to a GitHub repository.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the GitHub repository.
4. Use Vite, build command `npm run build`, output directory `dist`, install command `npm install`.
5. Select **Deploy**. Vercel will provide a public URL.
6. Open the deployed URL and test all navigation pages.

The included `vercel.json` supports React Router refreshes on nested routes.

## Photo credits
- Pexels photos 6146973 and 6146987 (Pexels free photo license).
- “Students learning together” by Alexis Brown, via Wikimedia Commons; CC0 1.0 (originally published on Unsplash before 5 June 2017).
- “University Students in the class” by Ngozi Stella Udechukwu, Wikimedia Commons; CC BY-SA 4.0: https://commons.wikimedia.org/wiki/File:University_Students_in_the_class.jpg

Images are remotely hosted and require an internet connection when the deployed site is viewed.

## Appearance themes

UniConnect includes a light/dark mode control in the top navigation. The selected theme is saved in the browser, so it remains selected when the student returns on the same device and browser. Light mode is the default for a first visit.
