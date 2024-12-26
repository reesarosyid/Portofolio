# Tailwind CSS Project

## Table of Contents
- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
- [License](#license)

## Introduction
This project uses [Tailwind CSS](https://tailwindcss.com/) as the primary utility-first CSS framework to build modern and responsive web interfaces efficiently.

## Getting Started
To get started with this project, ensure that you have the following prerequisites installed:

- [Node.js](https://nodejs.org/) (version 16 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Initialize Tailwind CSS:
   If Tailwind CSS is not already set up, run the following command to generate the configuration file:
   ```bash
   npx tailwindcss init
   ```

## Usage

### Input CSS File
Create a CSS file (e.g., `input.css`) and include the following Tailwind directives:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Development
To watch for changes and automatically generate the output CSS file, use the following command:
```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

### HTML Example
Use the generated `output.css` file in your HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./src/output.css" rel="stylesheet">
  <title>Tailwind CSS Project</title>
</head>
<body class="bg-gray-100">
  <h1 class="text-3xl font-bold text-center text-blue-500">Welcome to Tailwind CSS!</h1>
</body>
</html>
```

## Commands

- **Watch for changes:**
  ```bash
  npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
  ```

- **Build for production:**
  ```bash
  npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify
  ```

## License
This project is licensed under the [MIT License](LICENSE).
