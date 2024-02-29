
  <div align="center">
  <h1 align="center">Drum Machine</h1>
  <h3>Codebase for the Drum Machine</h3>
  <h3>◦ Developed with the software and tools below.</h3>
  <p align="center"><img src="https://img.shields.io/badge/-React-004E89?logo=React&style=flat" alt='React\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-React%20DOM-004E89?logo=React%20DOM&style=flat" alt='React DOM\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Vite-004E89?logo=Vite&style=flat" alt='Vite\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-PostCSS-004E89?logo=PostCSS&style=flat" alt='PostCSS\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Tailwind%20CSS-004E89?logo=Tailwind%20CSS&style=flat" alt='Tailwind CSS\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-ESLint-004E89?logo=ESLint&style=flat" alt='ESLint"' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" />
  </p>
  </div>
  
  ---
  ## 📚 Table of Contents
  - [📚 Table of Contents](#-table-of-contents)
  - [🔍 Overview](#-overview)
  - [🌟 Features](#-features)
  - [📁 Repository Structure](#-repository-structure)
  - [💻 Code Summary](#-code-summary)
  - [🚀 Getting Started](#-getting-started)
  
  ---
  
  
  ## 🔍 Overview

 This project is a Drum Machine, providing users with an interactive interface to play different drum sounds by clicking on virtual drum pads or pressing corresponding keyboard keys. It offers an enjoyable way to create rhythmic beats and experiment with various percussion sounds.

The Drum Machine is built using JavaScript, React, ReactDOM, Tailwind CSS, Vite, ESLint, and PostCSS. JavaScript is utilized to handle the logic behind triggering drum sounds based on user input. React and ReactDOM are employed for building the user interface, ensuring a dynamic and responsive user experience. Tailwind CSS is leveraged for styling the components, enabling rapid prototyping and easy customization of the UI. Vite serves as the build tool, optimizing the development workflow with fast bundling and hot module replacement. ESLint is used for code linting to maintain code quality and consistency. PostCSS is employed for processing CSS, enabling the use of modern CSS features and enhancing compatibility across different browsers.

With its intuitive interface and seamless integration of modern web technologies, this Drum Machine offers users a fun and creative way to experiment with rhythm and percussion, making it suitable for both beginners and experienced musicians alike.

Live Site URL : [GitHub Pages](https://donichristian.github.io/drum-machine/)

---

## 🌟 Features

 - React<br>- Tailwind CSS
- Drum machine
- Drum pads
- Drum pad interactions
- Application state management

---

## 📁 Repository Structure

```sh
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── drum.css
│   ├── drumController.jsx
│   ├── drumMachine.jsx
│   ├── drumPads.jsx
│   ├── index.css
│   ├── main.jsx
│   └── pads.jsx
├── tailwind.config.js
├── vite.config.js
└── yarn.lock

```

---

## 💻 Code Summary

<details><summary>Root</summary>

| File | Summary |
| ---- | ------- |
| postcss.config.js |  The code defines a JavaScript object with a `plugins` property that contains two plugins: `tailwindcss` and `autoprefixer`. |
| tailwind.config.js |  The code defines a Tailwind CSS configuration file, which specifies the content to be processed by Tailwind, including the HTML and JavaScript files to be analyzed, as well as the theme and plugins to be used. |
| vite.config.js |  The code defines a Vite configuration file for a React project, using the `@vitejs/plugin-react-swc` plugin and setting the base URL to `/drum-machine/`. |

</details>

---

<details><summary>\src</summary>

| File | Summary |
| ---- | ------- |
| App.jsx |  The code defines a React component that displays a Vite and React logo, a heading, a count button, and some text. |
| drumController.jsx |  The DrumController component is a React functional component that renders a drum machine interface with various controls, including a power button, volume control, and two kit selection buttons. It also generates five speaker bars based on the current power state and kit type. |
| drumMachine.jsx |  The code defines a React component called DrumMachine that renders a drum machine interface with a grid of pads, a volume control, and a power button. The component uses the `useState` hook to manage the state of the drum machine, including the current kit type, volume, and display name. It also uses the `useCallback` hook to memoize the `play` function, which is used to play a sound when a pad is clicked. The component also uses the `useEffect` hook to set the volume of the audio elements when the volume changes. |
| drumPads.jsx |  The DrumPads component is a React functional component that renders a drum pad with an audio clip and a button. It handles keyboard interactions by adding an event listener to the document, which triggers the handlePadInteraction function when a key is pressed. The component also has a useEffect hook that runs on mount and cleanup, and a useCallback hook that memoizes the handlePadInteraction function. |
| main.jsx |  The code renders a React component called DrumMachine inside a root element with ID root using ReactDOM. |
| pads.jsx |  The code defines a functional component called Pads that renders a list of drum pads based on the sounds prop, and passes down various props such as play power onDeactivePad and kitTypeClicked to each pad. |

</details>

---

## 🚀 Getting Started

 Getting Started with Drum Machine<br>=====================================

Welcome to the drum machine project! This guide will help you get started with the project and understand how to use it.

1. Installing Dependencies
---------------------------

Before you can start using the drum machine, you need to install the necessary dependencies. To do this, run the following command in your terminal:
```
npm install
```
This will install all the required dependencies for the project.

2. Running the Application
-----------------------------

To run the application, simply type the following command in your terminal:
```
npm run dev
```
This will start the development server and open the application in your default web browser.

3. Using the Drum Machine
---------------------------

Once the application is running, you can use the drum machine by clicking on the drum pads. Each drum pad has a different sound and can be customized by adjusting the volume and pitch. You can also use the keyboard to play the drums by pressing the corresponding keys.

4. Customizing the Drum Machine
------------------------------

You can customize the drum machine by editing the `drumMachine.jsx` file. This file contains the logic for the drum machine and defines the sounds and layout of the drum pads. You can add new sounds or modify existing ones by adding or modifying the `sounds` array

---

Generated with ❤️ by [ReadMeAI](https://www.readmeai.co/).
