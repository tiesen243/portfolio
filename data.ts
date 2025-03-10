import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'lucide-react'

import D2 from '@/public/assets/design/goldenglow.png'
import D3 from '@/public/assets/design/lin-yushia.png'
import D1 from '@/public/assets/design/tiesen-v1.png'
import D4 from '@/public/assets/design/tiesen-v2.png'

export const socials = [
  {
    icon: GithubIcon,
    name: 'Github',
    link: 'https://github.com/tiesen243',
  },
  {
    icon: LinkedinIcon,
    name: 'Linkedin',
    link: 'https://linkedin.com/in/tiesen243',
  },
  {
    icon: TwitterIcon,
    name: 'Twitter',
    link: 'https://x.com/tiesen243',
  },
  {
    icon: FacebookIcon,
    name: 'facebook',
    link: 'https://facebook.com/tiesen243.nanoda',
  },
]

export const navigations = [
  { name: 'Projects', url: '/projects' },
  { name: 'Blogs', url: '/blogs' },
]

export const skills = [
  { title: 'Linux', icon: '/assets/skills/linux.svg' },
  { title: 'Git', icon: '/assets/skills/github.svg', invert: true },
  { title: 'Typescript', icon: '/assets/skills/typescript.svg' },
  { title: 'Python', icon: '/assets/skills/python.svg' },
  { title: 'Photoshop', icon: '/assets/skills/photoshop.svg' },
  { title: 'Illustrator', icon: '/assets/skills/illustrator.svg' },
  { title: 'Turborepo', icon: '/assets/skills/turborepo.svg' },
  { title: 'tRPC', icon: '/assets/skills/trpc.svg' },
  { title: 'Prisma', icon: '/assets/skills/prisma.svg', invert: true },
  { title: 'React', icon: '/assets/skills/react.svg' },
  { title: 'Next.js', icon: '/assets/skills/nextjs.svg' },
  { title: 'Tailwind CSS', icon: '/assets/skills/tailwindcss.svg' },
]

export const educations = [
  {
    school: 'Hoang Hoa Tham High School',
    major: '',
    year: '2019 - 2022',
    GPA: '',
  },
  {
    school: 'Industrial University of Ho Chi Minh City',
    major: 'Computer Engineering Technology',
    year: '2022 - Present',
    GPA: '3.01/4.0',
  },
]

export const experiences = [
  {
    year: '2004 - Present',
    company: 'Work for myself',
    position: 'I have no experience ᗜ˰ᗜ',
  },
]

export const projects = [
  {
    slug: 'yuki',
    title: 'Yuki',
    preview:
      'An innovative E-Commerce application built using Turbo repo and Next.js, offering a seamless shopping experience with fast performance and modern design.',
    description:
      'This project is a cutting-edge e-commerce platform designed for scalability, performance, and maintainability. Built using Turborepo as a monorepo, it efficiently manages multiple applications within a single repository, improving developer workflow and optimizing build times.\nThe web storefront is developed with Next.js, leveraging its server-side rendering (SSR) and static site generation (SSG) capabilities to ensure fast page loads and an enhanced user experience. For the admin dashboard, Vue.js is used, providing a flexible and interactive interface for managing products, orders, and users efficiently.\nThe platform’s backend is powered by tRPC, enabling type-safe API communication between the front-end and back-end without the need for a traditional REST or GraphQL setup. This ensures a seamless and efficient data flow, reducing potential errors and improving development speed.\nFor styling, Tailwind CSS is used, allowing for a highly responsive and visually appealing user interface. With utility-first classes, it streamlines the design process and ensures consistency across both the storefront and the dashboard.\nThis tech stack creates a robust, scalable, and maintainable e-commerce solution, providing a high-performance shopping experience for users and an intuitive management system for administrators.',
    due: '',
    members: 1,
    link: 'https://shop.tiesen.id.vn',
    repo: 'https://github.com/tiesen243/yuki',
    tags: ['Next.js', 'Prisma', 'TailwindCSS', 'Turborepo', 'tRPC'],
  },
  {
    slug: 'cnn',
    title: 'CNN',
    preview:
      'Developed a project combining deep learning and web technologies to create a complete solution for digit recognition using the MNIST dataset.',
    description:
      'I developed a project combining deep learning and web technologies to create a complete solution for digit recognition using the MNIST dataset. The backend involved designing and training a Convolutional Neural Network (CNN) using PyTorch to accurately classify handwritten digits. The CNN was carefully optimized with techniques such as data normalization, dropout, and learning rate tuning to achieve high prediction accuracy.\nTo enhance usability, I built an interactive web interface using Vue.js, allowing users to draw or upload handwritten digits and view real-time predictions. The web application communicates seamlessly with the trained model, ensuring smooth integration between the frontend and backend. This project demonstrated expertise in both machine learning with PyTorch and frontend development with Vue.js, resulting in a functional, user-friendly tool for digit recognition.',
    due: '3 days',
    members: 1,
    link: '',
    repo: 'https://github.com/tiesen243/cnn',
    tags: ['MNIST', 'PyTorch', 'Python', 'Vue.js'],
  },
  {
    slug: 'kazez',
    title: 'Kazez',
    preview:
      'Developed an anime streaming website using Next.js, designed to provide users with an engaging and personalized viewing experience.',
    description:
      'I developed an anime streaming website using Next.js, designed to provide users with an engaging and personalized viewing experience. The platform features a secure login system, enabling users to create accounts and manage their anime preferences. Once logged in, users can add their favorite shows to a personalized watchlist, making it easy to keep track of their progress and revisit shows at any time.\nTo enhance community interaction, I implemented a commenting feature that allows users to share their thoughts and engage in discussions about specific anime titles. The website is designed with a clean, user-friendly interface, ensuring a seamless browsing experience. Additionally, it is optimized for performance and responsiveness, delivering a smooth experience across devices. This project demonstrates proficiency in building scalable web applications with Next.js while focusing on user-centric features and interactivity.',
    due: '3 days',
    members: 1,
    link: '',
    repo: 'https://github.com/tiesen243/kazez',
    tags: ['Comsumet API', 'Next.js', 'Prisma', 'Server Action'],
  },
  {
    slug: 'cnn-from-scratch',
    title: 'CNN from Scratch',
    preview:
      'A digit recognition project uses a Convolutional Neural Network (CNN) to accurately identify handwritten digits.',
    description:
      'A digit recognition project involved developing a Convolutional Neural Network (CNN) from scratch to accurately identify handwritten digits from the MNIST dataset. The CNN architecture incorporates convolutional layers for feature extraction and fully connected layers for classification. Through training on the extensive MNIST dataset, the model learns to effectively distinguish between different digit patterns, achieving high accuracy in digit recognition tasks.',
    due: '5 days',
    members: 1,
    link: '',
    repo: 'https://github.com/tiesen243/cnn-from-scratch',
    tags: ['MNIST', 'NumPy', 'Python'],
  },
  {
    slug: 'egg-community',
    title: 'Egg Community',
    preview:
      'Built a social media platform using Next.js for the frontend and ElysiaJS for the backend, creating a dynamic and interactive environment for users to engage with one another.',
    description:
      'I built a social media platform using Next.js for the frontend and ElysiaJS for the backend, creating a dynamic and interactive environment for users to engage with one another. The platform allows users to create and manage their personal profiles, with features to update essential information such as their name, bio, avatar, and password. This ensures a customizable and secure user experience.\nIn terms of social interaction, the platform supports the creation of posts, enabling users to share content with others. Users can engage with posts by liking, commenting, and even deleting their own posts, offering a full range of social interaction features. The backend, powered by ElysiaJS, is optimized for performance and scalability, ensuring smooth and efficient handling of user data and interactions.\nThe frontend, built with Next.js, provides a responsive and intuitive user interface, ensuring the platform works seamlessly across both desktop and mobile devices. This project showcases expertise in full-stack development, utilizing modern technologies to create a robust social platform that prioritizes user engagement, security, and ease of use.',
    due: '2 weeks',
    members: 1,
    link: 'https://egg-community.vercel.app',
    repo: 'https://github.com/tiesen243/egg-community',
    tags: ['ElysiaJS', 'Next.js', 'Prisma', 'Tailwind CSS'],
  },
  {
    slug: 'whack-a-mole',
    title: 'Whack-a-Mole',
    preview:
      'A Whack-a-Mole game is a fun and interactive project that challenges players to test their reflexes.',
    description:
      'A Whack-a-Mole game is a fun and interactive project that challenges players to test their reflexes. The game features a grid of holes from which moles randomly pop up, and players must quickly click on the moles to earn points. The game includes a timer to track the duration of each round and a score counter to display the player’s progress. With engaging gameplay and vibrant graphics, Whack-a-Mole provides an entertaining experience for users of all ages.',
    due: '1 day',
    members: 1,
    link: '',
    repo: 'https://github.com/tiesen243/whack-a-mole',
    tags: ['Pygame', 'Python'],
  },
]

export const designs = [D1, D2, D3, D4]
