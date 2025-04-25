const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Определяем пути
const rootDir = __dirname;
const clientDir = path.join(rootDir, 'client');
const serverDir = path.join(rootDir, 'server');

console.log('Starting build process...');

// Устанавливаем зависимости клиента, если они еще не установлены
if (!fs.existsSync(path.join(clientDir, 'node_modules'))) {
  console.log('Installing client dependencies...');
  execSync('npm install', { cwd: clientDir, stdio: 'inherit' });
}

// Устанавливаем зависимости сервера, если они еще не установлены
if (!fs.existsSync(path.join(serverDir, 'node_modules'))) {
  console.log('Installing server dependencies...');
  execSync('npm install', { cwd: serverDir, stdio: 'inherit' });
}

// Собираем клиентское приложение
console.log('Building client application...');
execSync('npm run build', { cwd: clientDir, stdio: 'inherit' });

console.log('Build completed successfully!'); 