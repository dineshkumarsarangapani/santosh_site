#!/bin/bash

# Script to quickly add, commit, and push changes to the main branch

# Add all changes
echo "Staging all changes..."
git add .

# Commit changes with a generic message
COMMIT_MESSAGE="Quick update"
echo "Committing with message: '$COMMIT_MESSAGE'..."
git commit -m "$COMMIT_MESSAGE"

# Push changes to the main branch on the remote origin
echo "Pushing to origin main..."
git push origin main

echo "Done." 