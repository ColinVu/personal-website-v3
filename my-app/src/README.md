# Personal Portfolio Website - Source Code

## Overview

This is a React-based personal portfolio website for Colin, featuring an interactive home page, media gallery, projects showcase, and about section. The website is deployed at [www.colinvu.org](http://www.colinvu.org) using GitHub Pages.

## How to Run the Application

### Prerequisites
- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

### Installation & Setup

1. **Navigate to the project directory:**
   ```bash
   cd personal-website-v3/my-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   
   The application will open in your browser at `http://localhost:3000`

### Available Scripts

- **`npm start`** - Runs the app in development mode with hot reloading
- **`npm run build`** - Builds the app for production to the `build` folder
- **`npm test`** - Launches the test runner in interactive watch mode
- **`npm run deploy`** - Deploys the built app to GitHub Pages
- **`npm run eject`** - Ejects from Create React App (irreversible)

### Deployment Process

For production deployment to GitHub Pages:
1. Make your changes and commit them to git
2. Run: `npm run build` (automatically runs before deploy)
3. Run: `npm run deploy`

## Project Structure

### Main Application Files

- **`App.js`** - Main application component with React Router setup
- **`index.js`** - Application entry point and React DOM rendering
- **`index.css`** - Global styles and CSS custom properties

### Pages Directory (`/pages`)

#### Main Pages
- **`Home.js`** - Interactive landing page with animated icons and navigation
- **`Media.js`** - Photography portfolio with categorized gallery
- **`Projects.js`** - Projects showcase and demonstrations  
- **`AboutMe.js`** - Personal information and bio section

#### Supporting Components
- **`TypeWriterText.js`** - Animated typewriter text effect component
- **`Timeline.js`** - Interactive timeline component for Home page
- **`Construction.js`** - Under construction placeholder component
- **`CursorText.js`** - Custom cursor text following component
- **`LeftMedia.js` / `RightMedia.js`** - Media gallery navigation components

#### Media Pages (`/media_pages`)
Specialized components for different photo categories:
- **`MediaManager.js`** - Manages media routing and organization
- **`LightPage.js`** - Light/bright themed photographs
- **`TimePage.js`** - Time-lapse and temporal photography
- **`WorldPage.js`** - Travel and landscape photography
- **`PeoplePage.js`** - Portrait and people photography
- **`MeaningPage.js`** - Meaningful/artistic photography
- **`YearsPage.js`** - Year-based photo organization

### Assets Directory (`/assets`)

- **`images/`** - Static images including icons and profile photos
- **`fonts/`** - Custom fonts (IBM Plex Mono, Inter)
- **`index.js`** - Exports icon mappings for easy component access
- **`mediaIndex.js`** - Manages media file organization and metadata

### Key Features

1. **Interactive Home Page**
   - Animated icon navigation
   - Typewriter text effects
   - Mouse-following elements
   - Timeline component with personal milestones

2. **Media Gallery**
   - Categorized photo collections (Light, Time, World, People, Meaning, Years)
   - Left/right navigation between categories
   - Responsive image display
   - Custom cursor interactions

3. **Projects Section**
   - Project demonstrations and documentation
   - Repository links and technical details

4. **About Me**
   - Personal information and background
   - Contact information and social links

## Dependencies

### Core Dependencies
- **React 18.3.1** - UI framework
- **React Router DOM 7.3.0** - Client-side routing
- **React Icons 5.2.1** - Icon components

### Graphics & Animation
- **Konva 9.3.14** - 2D canvas graphics library
- **@progress/kendo-drawing 1.20.1** - Drawing and graphics utilities

### Development & Deployment
- **React Scripts 5.0.1** - Build tools and development server
- **gh-pages 6.1.1** - GitHub Pages deployment

## Development Tips

1. **Hot Reloading**: Changes to any `.js`, `.css`, or `.jsx` files will automatically reload the browser
2. **Asset Management**: Add new images to `/assets/images/` and update `/assets/index.js` for easy imports
3. **Styling**: Each component has its own CSS file for modular styling
4. **Media Files**: Large media files are stored in `/public/mediaImages/` for direct browser access
5. **Routing**: Add new pages by creating components in `/pages/` and updating routes in `App.js`

## Browser Support

- Modern browsers supporting ES6+
- Chrome (last version)
- Firefox (last version) 
- Safari (last version)
- Edge (last version)

For any issues or questions, refer to the main project README or React documentation. 