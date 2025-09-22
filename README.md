# MEDP33100 - Project 1 Interactive Storytelling

## Live Demo

    https://isabell-lee08.github.io/project1/

## Project Overview

    My project is a simple space adventure story. The user meets an alien named Chorg, who is lost, and must pick between a few planets to find Chorg's home. The user interacts by scrolling the page, which reveals the story, and by clicking planets that lead to separate subpages with different results.

## Figma Design

    https://www.figma.com/design/cHaf0I120vMzpiHRrtfrd3/project-1-wireframe?m=auto&t=6bPKm1yOyyyWY06S-6

## Features

- **Animations**:
    The title is animated by GSAP, it lightly bounces up and down. The planet options are all animated using CSS, they rotate and float moderately. When hovering over the planets, they transition and become bigger, and also have a glowing outline to highlight the user's selection.
- **Sound Effects**:
    Chorg is an interactable element of the game. He will play a sound if the user clicks on his face.
- **User-triggered Events**:
    Users can scroll to cycle through the story directions. They can choose to click on any planet they want, sending them to other pages with more story.
- **Responsive Design**:
    Chorg will relocate if the screen gets smaller, to avoid blocking the text. The planets will also reorganize into a column rather than the default row it is usually in.

## Technologies Used

- **Languages**:
    HTML, CSS, JavaScript
- **Libraries**:
    GSAP for scrolling and other animations
- **Other**:
    GitHub Pages for hosting, Figma for design, Clip Studio Paint for illustrations

## Credits

- List any third-party assets used in the project (e.g., sound effects, images, fonts) and provide proper attribution.
    - Chorg sound effect: toy button sound, free to use, from Pixabay (https://pixabay.com/sound-effects/toy-button-105724/)
    - Title font: Press Start 2P (https://fonts.google.com/specimen/Press+Start+2P)
    - Body font: Orbit (https://fonts.google.com/specimen/Orbit)

- Acknowledge any resources, tutorials, or references you used to help complete the project.
    - GSAP ScrollTrigger tutorials
    - Many Stack Overflow threads
    - W3 Schools resources

## Future Enhancements

    I would try to make it fully compatible across devices. My page has basic responsiveness, but there are details with spacing/positioning that I'd like to fully flesh out. It would be fun to implement 3D assets for the planets and animate them to rotate in place. There are some art aspects I would spend more time on, like a more detailed console overlay, idle animations for Chorg, and a longer story for each planet path.
