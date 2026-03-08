#!/bin/bash

# Script to build static version of portfolio (without admin panel)

echo "Moving admin and API routes temporarily..."
if [ -d "app/api" ]; then
  mv app/api api_backup_temp
fi

if [ -d "app/api_backup" ]; then
  mv app/api_backup api_backup_temp
fi

if [ -d "app/admin" ]; then
  mv app/admin admin_backup_temp
fi

echo "Cleaning previous build..."
rm -rf .next out

echo "Building static site..."
npm run build

if [ $? -eq 0 ]; then
  echo "Build successful! 'out' directory created."
  echo "You can now deploy with: firebase deploy --only hosting"
else
  echo "Build failed!"
  # Restore folders on failure
  if [ -d "api_backup_temp" ]; then
    mv api_backup_temp app/api
  fi
  if [ -d "admin_backup_temp" ]; then
    mv admin_backup_temp app/admin
  fi
  exit 1
fi
