# 🎥 Let's React

A Movie App Project for React practice for learning and implementing various React concepts and features.

## 📦 Project Structure

```
lets-react/
├── practice/           # Practice exercises and examples
│   ├── moduleCss/     # CSS Modules practice
│   ├── srcConverter/  # Source code converter practice
│   └── srcPractice/   # General React practice
├── public/            # Static files
└── src/               # Main source code
    ├── components/    # React components
    └── routes/        # Route components
```

### 🌳 React-2019 Branch
**Important: Branch Switching Instructions**
1. Checkout to react-2019 branch
2. Remove existing dependencies:
   ```bash
   rm -rf node_modules package-lock.json
   ```
3. Set Node.js version in .nvmrc:
   ```bash
   nvm use
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm start
   ``` 

## 💻 Technologies Used

- React 19.1.0
- React Router DOM 7.6.0
- React Testing Library
- PropTypes
- GitHub Pages for deployment

## 📦 Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run deploy`: Deploys the app to GitHub Pages

## 💻 Development Environment

- Node.js
- npm
- Create React App

## 🎯 Features

- Modern React practices and patterns
- Component-based architecture
- Routing with React Router
- CSS Modules for styling
- Automated deployment to GitHub Pages

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## 🚀 Deployment

The project is configured for deployment to GitHub Pages. To deploy:

```bash
npm run deploy
```

The app will be deployed to: https://feelsuegood.github.io/letsue-react

## 🏷️ License
- CC BY-NC-SA 4.0 (non-commercial research only)
- This project is for non-commercial research and educational purposes only.
  
## 📚 Acknowledgements
- [Movie Application](https://dribbble.com/shots/2442798-Movie-Application)
- [React for Beginners](https://nomadcoders.co/react-for-beginners)

## 📝 Planned Improvements

1. Detail Page Enhancement
   - Implement state management for JSON data
   - Add loading state handling
   - Improve detail screen UI to match Home page design
   - Create navigation menu bar

2. Code Challenges
   - Complete pending code challenges in converter component
   - Add more interactive practice exercises

3. Architecture & Structure
   - Add TypeScript for better type safety
   - Implement proper error boundary handling

4. Testing & Quality
   - Increase test coverage
   - Add E2E testing with Cypress or Playwright
