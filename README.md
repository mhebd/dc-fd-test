# Themed Blog Listing Application

## Project Approach and Implementation

This project is a themed blog listing application built with Next.js 15, featuring a responsive design, dark mode support, and dynamic content fetching. The application showcases a list of blog posts on the home page and individual blog post pages, all while allowing users to toggle between light and dark themes.

### Key Features:

1. Responsive design using Tailwind CSS
2. Dark mode toggle with theme persistence
3. Server-side rendering for improved performance and SEO
4. Dynamic routing for individual blog posts
5. Search functionality to filter blog posts
6. State management using Zustand

## Technology Stack

- **React & Next.js 15**: Leveraging the latest features of Next.js, including the App Router for improved routing and server components for enhanced performance.
- **Tailwind CSS**: For responsive and customizable styling.
- **Zustand**: A lightweight state management solution for managing the theme and potentially other global states.
- **TypeScript**: For type-safe code and improved developer experience.
- **Lucide React**: For high-quality, customizable icons.

### API Handling:

- Utilizing Next.js 15's server components for data fetching, ensuring efficient and SEO-friendly content loading.
- Implementing client-side search functionality for a responsive user experience.

### Hosting:

- Deployed on Vercel for seamless integration with Next.js and automatic deployments.

## Challenges and Solutions

1. **Challenge**: Implementing a persistent theme across page reloads and navigation.
   **Solution**: Utilized Zustand with the persist middleware to store the theme preference in localStorage. This ensures the user's theme choice is remembered across sessions.

2. **Challenge**: Handling server-side rendering (SSR) with client-side interactivity for the theme toggle.
   **Solution**: Implemented a `ThemeProvider` component that manages the initial theme state and updates, ensuring smooth transitions between server and client rendering.

3. **Challenge**: Creating a responsive layout that works well on both mobile and desktop devices.
   **Solution**: Leveraged Tailwind CSS's responsive classes to create a fluid layout that adapts to different screen sizes. Implemented a collapsible navigation menu for mobile views.

4. **Challenge**: Implementing efficient search functionality without compromising performance.
   **Solution**: Developed a client-side search feature that filters the blog posts in real-time as the user types, providing instant feedback without the need for additional API calls.

5. **Challenge**: Ensuring accessibility in both light and dark modes.
   **Solution**: Carefully selected color contrasts that meet WCAG guidelines for both themes. Implemented proper ARIA labels and ensuring keyboard navigation works correctly in all components.

## Use of AI Tools (Optional)

During the development of this project, I utilized AI-powered assistance in the following ways:

1. **Problem Solving**: Utilized ChatGPT to brainstorm solutions for specific challenges, such as implementing the theme toggle with SSR compatibility.

2. **Code Review**: Employed AI-powered code review tools to identify potential issues and suggest optimizations in the codebase.

3. **Documentation Assistance**: Used AI to help structure and refine this README document, ensuring clarity and completeness.

While AI tools were helpful in expediting certain aspects of development, all code and design decisions were ultimately reviewed, understood, and implemented by me to ensure quality and appropriateness for the project requirements.

## Conclusion

This themed blog listing application demonstrates a modern, performant, and user-friendly approach to web development using Next.js 15. By leveraging server-side rendering, efficient state management, and responsive design, the application provides a smooth and engaging user experience while maintaining good performance and SEO practices.
