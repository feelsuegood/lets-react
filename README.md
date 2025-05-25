# React 2019
### ‼️ Be sure to follow the command execution order
```bash
rm -rf node_modules package-lock.json
nvm use
# 16.x (disabled since January 31st, 2025)
npm cache clean --force
npm i
```
### Add this to `.zshrc` to automatically use the correct node version (optional)
```bash
autoload -U add-zsh-hook

load-nvmrc() {
  if [ -f .nvmrc ]; then
    nvm use --silent
  elif nvm_version=$(nvm version default); then
    nvm use default --silent
  fi
}

add-zsh-hook chpwd load-nvmrc
load-nvmrc`
```
### package.json
```json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  },
  "dependencies": {
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-scripts": "3.0.1"
  },
  "devDependencies": {
    "eslint": "^5.16.0"
  }
```

