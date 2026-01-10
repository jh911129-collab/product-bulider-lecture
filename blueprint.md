# Lotto Number Generator

## Overview

A simple, visually appealing web application that generates and displays 6 random lottery numbers. The application is designed to be user-friendly, responsive, and aesthetically pleasing, following modern web development and design principles.

## Style, Design, and Features

### Visual Design
*   **Theme:** Modern, clean, and vibrant.
*   **Layout:** A centered, card-based interface that is responsive and works on all screen sizes.
*   **Color Palette:** A gradient background with a primary color for interactive elements. We will use modern color spaces like `oklch`.
*   **Typography:** Clear, legible, and well-proportioned fonts. The main title will be prominent.
*   **Effects:**
    *   Subtle background noise texture for a premium feel.
    *   Soft drop shadows on the main card and button to create depth.
    *   A "glow" effect on the button on hover.
*   **Iconography:** An icon will be used on the generation button for better user understanding.

### Application Features
*   **Web Components:** A `<lotto-ball>` custom element will be created to display each generated number. This component will be self-contained and reusable.
*   **Number Generation:**
    *   Clicking the "Generate Numbers" button will produce 6 unique random numbers between 1 and 45.
    *   The generated numbers will be displayed in individual, color-coded balls.
    *   The numbers will be sorted in ascending order for easy reading.
*   **Animation:** The numbers will fade in smoothly when generated.

## Current Plan

1.  **Update `index.html`:** Set up the basic structure of the application, including the main container, title, a placeholder for the lottery balls, and the generator button.
2.  **Update `style.css`:** Implement the full visual design, including the background, card layout, typography, button styles, and the styling for the lotto balls.
3.  **Update `main.js`:**
    *   Create the `lotto-ball` custom Web Component.
    *   Implement the JavaScript logic to generate, sort, and display the unique lottery numbers when the button is clicked.
