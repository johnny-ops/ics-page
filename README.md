# Institute of Computing Studies (ICS) Website

A modern, responsive website for the Institute of Computing Studies built with React.

## Features

- **Modern Design**: Clean, professional UI with a neutral color palette
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Calendar**: Real JavaScript calendar with event markers and details
- **Mission & Vision**: Clearly presented institutional goals and objectives
- **Professional Icons**: Using React Icons (Font Awesome) throughout
- **Smooth Animations**: Subtle hover effects and transitions
ddd
## Tech Stack

- React 18.2.0
- React Icons 5.0.1
- React Calendar 4.8.0
- CSS3 with modern features

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
src/
├── components/
│   ├── Hero.js              # Hero section with navbar and dean message
│   ├── Hero.css
│   ├── MissionVision.js     # Mission, vision, and objectives
│   ├── MissionVision.css
│   ├── Calendar.js          # Interactive calendar with events
│   ├── Calendar.css
│   ├── Footer.js            # Footer with links and contact info
│   └── Footer.css
├── App.js                   # Main app component
├── App.css
├── index.js
└── index.css
```

## Sections

1. **Navigation Bar**: Sticky header with links to all major sections
2. **Hero Section**: Institute title and tagline
3. **Welcome Section**: Greeting for students
4. **Dean's Message**: Introduction from the Dean
5. **Mission & Vision**: Institutional mission and vision statements
6. **Institutional Objectives**: Five key objectives with icons
7. **Calendar of Activities**: Interactive calendar with upcoming events
8. **Footer**: Quick links, programs, and contact information

## Customization

### Adding Events

Edit `src/components/Calendar.js` and add events to the `events` array:

```javascript
{
  date: new Date(2026, 7, 15),
  title: 'Your Event',
  time: '8:00 AM - 5:00 PM',
  location: 'Location',
  type: 'event' // event, academic, competition, or exam
}
```

### Changing Colors

Main colors are defined in the CSS files. Key colors:
- Primary: `#1a1a2e` (dark blue-gray)
- Secondary: `#4a5568` (medium gray)
- Background: `#f7fafc` (light gray)
- Text: `#4a5568` (medium gray)

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## License

© 2026 Institute of Computing Studies. All rights reserved.
