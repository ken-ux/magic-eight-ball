# Magic Eight Ball

This is a simple web app that lets you ask a question to the Magic Eight Ball and receive a randomized answer. I did this project to learn [Three.js](https://github.com/mrdoob/three.js) since I've been interested in working with 3D graphics in browser apps. I used a popular library version that's suited for React apps called [react-three-fiber](https://github.com/pmndrs/react-three-fiber).

Live version can be found here: https://magic-8-ball-ken.netlify.app/

## Technology Used

- React
- TypeScript
- Tailwind CSS

## Lessons Learned

- Loading texture maps and applying them to an object's mesh material.
- Loading an environment into the scene.
- Using Three.js's math utility methods to correctly rotate a sphere 180 degrees by converting degree measurements into radians, which is the unit used for an object's rotation.
- Not directly related to the project's purpose, but I learned that Tailwind's latest update means that I no longer have to run a script that watches and compiles a Tailwind CSS file as I'm making style changes. You can see this in my past projects where I tend to run the Tailwind CSS compilation script in parallel with my script for running a dev server with vite.

## Credits

I downloaded the venice sunset HDRI used for the scene's environment from [Poly Haven](https://polyhaven.com/).
