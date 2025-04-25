#!/bin/bash
set -e

# Устанавливаем зависимости корневого проекта
echo "Installing root dependencies..."
npm install --legacy-peer-deps

# Переходим в клиентскую директорию
cd client

# Устанавливаем зависимости клиента с правильными флагами
echo "Installing client dependencies..."
npm install --legacy-peer-deps

# Собираем клиентское приложение
echo "Building client application..."
CI=false npm run build

# Возвращаемся в корневую директорию
cd ..

# Устанавливаем зависимости сервера
echo "Installing server dependencies..."
cd server
npm install --legacy-peer-deps

echo "Build completed successfully!" 