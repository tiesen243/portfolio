import { BookOpen, Code, Gamepad, Tv } from 'lucide-react'

interface Project {
  slug: string
  title: string
  preview: string
  description: string
  link: string
  repo: string
  tags: string[]
}

export const projects: Project[] = [
  {
    slug: 'yuki',
    title: 'Yuki',
    preview:
      'An e-commerce project is a user-friendly marketplace with admin tools. Shoppers can browse, buy, and manage their accounts.',
    description:
      'An e-commerce project is a comprehensive online marketplace that offers a seamless shopping experience. Users can create accounts using email and password or connect through Discord for convenient login. The admin dashboard provides powerful tools for managing users, categories, products, and orders. Shoppers can browse and purchase products, easily adding items to their cart. Users have the flexibility to update their personal information, ensuring a personalized experience.',
    link: 'https://yuki.tiesen.id.vn',
    repo: 'https://github.com/tiesen243/yuki',
    tags: ['Next.js', 'Tailwind CSS', 'tRPC', 'Prisma', 'Uploadthing', 'Lucia', 'Arctic', 'Resend'],
  },
  {
    slug: 'kazez',
    title: 'Kazez',
    preview:
      'A anime streaming platform is a user-friendly website where fans can watch their favorite shows and movies.',
    description:
      'A anime streaming platform is a user-friendly website where fans can watch their favorite shows and movies. The platform offers a vast library of anime content, organized by genre, popularity, and release date. Users can create accounts to access personalized recommendations and track their viewing history. The platform supports video streaming with high-quality playback and subtitles. Additionally, users can interact with the community through comments and ratings, enhancing the overall viewing experience.',
    link: 'https://kazez.vercel.app',
    repo: 'https://github.com/tiesen243/kazez',
    tags: ['Next.js', 'Comsumet API', 'Prisma', 'Server Action', 'Lucia', 'React Query'],
  },
  {
    slug: 'egg-community',
    title: 'Egg Community',
    preview:
      'A social platform is an interactive online community where users can share content and engage with others.',
    description:
      'A social platform is a dynamic online community where users can interact and share content. Key features include authentication for user accounts, the ability to create, read, update, and delete (CRUD) posts and comments, and personalized user profiles. Additionally, users can follow or unfollow other members to tailor their content feed. The platform supports image uploads, allowing for visually engaging posts and a rich user experience.',
    link: 'https://egg-community.vercel.app',
    repo: 'https://github.com/tiesen243/egg-community',
    tags: ['Next.js', 'Tailwind CSS', 'ElysiaJS', 'Prisma', 'Cloudinary', 'Lucia', 'Resend'],
  },
  {
    slug: 'portfolio',
    title: 'Portfolio',
    preview:
      'My portfolio showcases my skills, experience, and projects. It includes blog posts highlighting my thoughts and interests.',
    description:
      'My portfolio project serves as a digital showcase of my skills and accomplishments. It provides a comprehensive overview of my professional background, including my experience, education, and technical expertise. Additionally, the portfolio features a curated collection of my blog posts, offering insights into my thought process and areas of interest. This platform allows visitors to explore my work and learn more about my capabilities.',
    link: 'https://tiesen.id.vn',
    repo: 'https://github.com/tiesen243/portfolio',
    tags: ['Next.js', 'Tailwind CSS', 'Fumadocs'],
  },
  {
    slug: 'digit-recognization',
    title: 'Digit Recognization',
    preview:
      'A digit recognition project uses a Convolutional Neural Network (CNN) to accurately identify handwritten digits.',
    description:
      'A digit recognition project involved developing a Convolutional Neural Network (CNN) from scratch to accurately identify handwritten digits from the MNIST dataset. The CNN architecture incorporates convolutional layers for feature extraction and fully connected layers for classification. Through training on the extensive MNIST dataset, the model learns to effectively distinguish between different digit patterns, achieving high accuracy in digit recognition tasks.',
    link: '',
    repo: 'https://github.com/tiesen243/digit-recognization',
    tags: ['Python', 'CNN', 'NumPy', 'MNIST'],
  },
  {
    slug: 'whack-a-mole',
    title: 'Whack-a-Mole',
    preview:
      'A Whack-a-Mole game is a fun and interactive project that challenges players to test their reflexes.',
    description:
      'A Whack-a-Mole game is a fun and interactive project that challenges players to test their reflexes. The game features a grid of holes from which moles randomly pop up, and players must quickly click on the moles to earn points. The game includes a timer to track the duration of each round and a score counter to display the player’s progress. With engaging gameplay and vibrant graphics, Whack-a-Mole provides an entertaining experience for users of all ages.',
    link: '',
    repo: 'https://github.com/tiesen243/whack-a-mole',
    tags: ['Python', 'Pygame'],
  },
]

export const designs = [
  '/assets/design/tiesen-v1.png',
  '/assets/design/goldenglow.png',
  '/assets/design/lin-yushia.png',
  '/assets/design/tiesen-v2.png',
]

export const education = [
  { id: 1, time: '2019 - 2022', school: 'Hoang Hoa Tham High School' },
  {
    id: 2,
    time: '2022 - present',
    school: 'Industrial University of Ho Chi Minh City',
    major: 'Computer Engineering Technology',
    gpa: 3.01,
  },
]

export const experiences = [
  {
    id: 1,
    time: '2004 - present',
    title: 'Work for myself',
    description: 'I have no experience yet 😭',
  },
]

export const hobbies = [
  { id: 1, title: 'Coding and Programming', icon: Code },
  { id: 2, title: 'Reading Light Novels and Manga', icon: BookOpen },
  { id: 3, title: 'Watching Anime', icon: Tv },
  { id: 4, title: 'Playing Games', icon: Gamepad },
]

export const stuffs = [
  {
    id: 1,
    title: 'Create Yuki App',
    description: ' My Next template with next, eslint, prettier, tailwind config files and more.',
    link: 'https://github.com/tiesen243/create-yuki-app',
    isExternal: true,
  },
  {
    id: 2,
    title: 'Create Yuki Turbo',
    description: 'Clean and typesafe starter monorepo using Turborepo along with Next.js and tRPC.',
    link: 'https://github.com/tiesen243/create-yuki-turbo',
    isExternal: true,
  },
]

export const skills = [
  {
    id: 1,
    title: 'TypeScript',
    color: '#3178C6',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>TypeScript </title>
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Turborepo',
    color: '#EF4444',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Turborepo </title>
        <path d="M6.155 12.058c0 .503.095.967.285 1.392.19.424.447.793.771 1.106.324.313.699.56 1.123.738.437.168.895.252 1.375.252.481 0 .934-.084 1.359-.252a3.578 3.578 0 0 0 1.14-.738 3.37 3.37 0 0 0 1.073-2.498 3.371 3.371 0 0 0-1.073-2.498 3.356 3.356 0 0 0-1.14-.721 3.463 3.463 0 0 0-1.359-.269c-.48 0-.938.09-1.374.269-.425.167-.8.408-1.124.72a3.52 3.52 0 0 0-.771 1.107 3.37 3.37 0 0 0-.285 1.392Zm-3.437 0c0-.939.173-1.81.52-2.616a6.524 6.524 0 0 1 1.441-2.13 6.503 6.503 0 0 1 2.197-1.408c.86-.346 1.805-.52 2.833-.52 1.018 0 1.957.174 2.817.52a6.47 6.47 0 0 1 2.213 1.409 6.542 6.542 0 0 1 1.979 4.745c0 .939-.173 1.816-.52 2.632a6.45 6.45 0 0 1-1.459 2.113 6.678 6.678 0 0 1-2.213 1.425c-.86.335-1.8.503-2.817.503-1.028 0-1.973-.168-2.833-.503a6.717 6.717 0 0 1-2.197-1.425 6.572 6.572 0 0 1-1.442-2.113 6.663 6.663 0 0 1-.52-2.632ZM10.144.008c-2.76-.096-5.52.76-7.805 2.569l1.523.857C5.67 2.1 7.955 1.53 10.144 1.625V.007Zm8.09 3.616C16.331 1.625 13.856.388 11.191.102V1.72a10.725 10.725 0 0 1 5.901 3.046l1.142-1.142Zm3.427 7.805c-.095-2.475-1.047-4.95-2.665-7.043l-1.142 1.142c1.332 1.808 2.094 3.807 2.189 5.9h1.618Zm-2.665 8.185c1.618-2.094 2.57-4.568 2.665-7.043h-1.618c-.095 2.094-.857 4.093-2.19 5.901l1.143 1.142Zm-7.805 4.284c2.57-.286 5.14-1.523 7.043-3.522l-1.142-1.142c-1.618 1.713-3.712 2.76-5.901 3.046v1.618Zm-8.852-2.475a11.867 11.867 0 0 0 7.805 2.57v-1.618c-2.19.095-4.378-.476-6.282-1.809l-1.523.857Z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Next.js',
    color: '',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Next.js </title>
        <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'React',
    color: '#61DAFB',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>React </title>
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Tailwind CSS',
    color: '#06B6D4',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Tailwind CSS </title>
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'tRPC',
    color: '#2596BE',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>tRPC </title>
        <path d="M24 12c0 6.62-5.38 12-12 12S0 18.62 0 12 5.38 0 12 0s12 5.38 12 12ZM1.21 12A10.78 10.78 0 0 0 12 22.79 10.78 10.78 0 0 0 22.79 12 10.78 10.78 0 0 0 12 1.21 10.78 10.78 0 0 0 1.21 12Zm10.915-6.086 2.162 1.248a.25.25 0 0 1 .125.217v1.103l2.473 1.428a.25.25 0 0 1 .125.217v2.355l.955.551a.25.25 0 0 1 .125.217v2.496a.25.25 0 0 1-.125.217l-2.162 1.248a.25.25 0 0 1-.25 0l-.956-.552-2.472 1.427a.25.25 0 0 1-.25 0l-2.472-1.427-.956.552a.25.25 0 0 1-.25 0l-2.162-1.248a.25.25 0 0 1-.125-.217V13.25a.25.25 0 0 1 .125-.217l.955-.551v-2.355a.25.25 0 0 1 .125-.217l2.473-1.428V7.38a.25.25 0 0 1 .125-.217l2.162-1.248a.25.25 0 0 1 .25 0Zm1.268 10.049a.25.25 0 0 1-.125-.217V13.25a.25.25 0 0 1 .125-.217l2.16-1.248a.25.25 0 0 1 .25 0l.707.408v-1.922l-2.098-1.21v.814a.25.25 0 0 1-.125.217l-2.162 1.248a.25.25 0 0 1-.25 0l-2.162-1.248a.25.25 0 0 1-.125-.217V9.06L7.49 10.271v1.922l.707-.408a.25.25 0 0 1 .25 0l2.16 1.248a.25.25 0 0 1 .125.217v2.496a.25.25 0 0 1-.125.217l-.705.408L12 17.582l2.098-1.211ZM10.088 9.73l1.662.96V8.766l-1.662-.955Zm3.824 0V7.811l-1.662.955v1.924ZM12 6.418l-1.66.96 1.66.954 1.66-.954Zm-5.59 9.184 1.66.958v-1.921l-1.66-.956Zm3.822 0v-1.92l-1.662.957v1.923Zm-1.91-3.311-1.662.96 1.661.955 1.66-.956Zm5.446 3.31 1.66.96v-1.922l-1.66-.956Zm3.822 0v-1.918l-1.662.956v1.922Zm-1.912-3.31-1.66.96 1.66.955 1.66-.956Z" />
      </svg>
    ),
  },
  {
    id: 7,
    title: 'Prisma',
    color: '',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Prisma </title>
        <path d="M21.8068 18.2848L13.5528.7565c-.207-.4382-.639-.7273-1.1286-.7541-.5023-.0293-.9523.213-1.2062.6253L2.266 15.1271c-.2773.4518-.2718 1.0091.0158 1.4555l4.3759 6.7786c.2608.4046.7127.6388 1.1823.6388.1332 0 .267-.0188.3987-.0577l12.7019-3.7568c.3891-.1151.7072-.3904.8737-.7553s.1633-.7828-.0075-1.1454zm-1.8481.7519L9.1814 22.2242c-.3292.0975-.6448-.1873-.5756-.5194l3.8501-18.4386c.072-.3448.5486-.3996.699-.0803l7.1288 15.138c.1344.2856-.019.6224-.325.7128z" />
      </svg>
    ),
  },
  {
    id: 8,
    title: 'Lucia',
    color: '#5F57FF',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Lucia </title>
        <path d="M20.382 20.714 12 0 3.618 20.714 2.288 24h19.423zM12 13.61l-5.73 7.058 1.288-3.184L12 6.505l4.442 10.978 1.289 3.184z" />
      </svg>
    ),
  },
  {
    id: 9,
    title: 'Python',
    color: '#3776AB',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Python </title>
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
      </svg>
    ),
  },
  {
    id: 10,
    title: 'NumPy',
    color: '#013243',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>NumPy </title>
        <path d="M10.315 4.876L6.3048 2.8517l-4.401 2.1965 4.1186 2.0683zm1.8381.9277l4.2045 2.1223-4.3622 2.1906-4.125-2.0718zm5.6153-2.9213l4.3193 2.1658-3.863 1.9402-4.2131-2.1252zm-1.859-.9329L12.021 0 8.1742 1.9193l4.0068 2.0208zm-3.0401 16.7443V24l4.7107-2.3507-.0053-5.3085zm4.7037-4.2057l-.0052-5.2528-4.6985 2.3356v5.2546zm5.6553-.9845v5.327l-4.0178 2.0052-.0029-5.3028zm0-1.8626V6.4214l-4.0253 2.001.0034 5.2633zM11.2062 11.571L8.0333 9.9756v6.895s-3.8804-8.2564-4.2399-8.998c-.0463-.0957-.2371-.2007-.2858-.2262C2.8118 7.2812.773 6.2485.773 6.2485V18.43l2.8204 1.5076v-6.3674s3.8392 7.3775 3.878 7.458c.0389.0807.4245.8582.8362 1.1314.5485.363 2.8992 1.7766 2.8992 1.7766z" />
      </svg>
    ),
  },
  {
    id: 11,
    title: 'Photoshop',
    color: '#31A8FF',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Adobe Photoshop </title>
        <path d="M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01-.2-.01-.34 0-.41.01v3.36c.14.01.27.02.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03.01-.31-.07-.62-.23-.89-.17-.26-.41-.46-.7-.57zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.899c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.391 11.65c-.399.56-.959.98-1.609 1.22-.68.25-1.43.34-2.25.34-.24 0-.4 0-.5-.01s-.24-.01-.43-.01v3.209c.01.07-.04.131-.11.141H5.52c-.08 0-.12-.041-.12-.131V6.42c0-.07.03-.11.1-.11.17 0 .33 0 .56-.01.24-.01.49-.01.76-.02s.56-.01.87-.02c.31-.01.61-.01.91-.01.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.149.42.229.85.229 1.3.001.86-.199 1.57-.6 2.13zm7.091 3.89c-.28.4-.671.709-1.12.891-.49.209-1.09.318-1.811.318-.459 0-.91-.039-1.359-.129-.35-.061-.7-.17-1.02-.32-.07-.039-.121-.109-.111-.189v-1.74c0-.029.011-.07.041-.09.029-.02.06-.01.09.01.39.23.8.391 1.24.49.379.1.779.15 1.18.15.38 0 .65-.051.83-.141.16-.07.27-.24.27-.42 0-.141-.08-.27-.24-.4-.16-.129-.489-.279-.979-.471-.51-.18-.979-.42-1.42-.719-.31-.221-.569-.51-.761-.85-.159-.32-.239-.67-.229-1.021 0-.43.12-.84.341-1.21.25-.4.619-.72 1.049-.92.469-.239 1.059-.349 1.769-.349.41 0 .83.03 1.24.09.3.04.59.12.86.23.039.01.08.05.1.09.01.04.02.08.02.12v1.63c0 .04-.02.08-.05.1-.09.02-.14.02-.18 0-.3-.16-.62-.27-.96-.34-.37-.08-.74-.13-1.12-.13-.2-.01-.41.02-.601.07-.129.03-.24.1-.31.2-.05.08-.08.18-.08.27s.04.18.101.26c.09.11.209.2.34.27.229.12.47.23.709.33.541.18 1.061.43 1.541.73.33.209.6.49.789.83.16.318.24.67.23 1.029.011.471-.129.94-.389 1.331z" />
      </svg>
    ),
  },
  {
    id: 12,
    title: 'Illustrator',
    color: '#FF9A00',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Adobe Illustrator </title>
        <path d="M10.53 10.73c-.1-.31-.19-.61-.29-.92-.1-.31-.19-.6-.27-.89-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.14.51-.29.98-.44 1.4h2.54c-.06-.211-.14-.46-.23-.721-.09-.269-.18-.559-.27-.859zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zM14.7 16.83h-2.091c-.069.01-.139-.04-.159-.11l-.82-2.38H7.91l-.76 2.35c-.02.09-.1.15-.19.141H5.08c-.11 0-.14-.061-.11-.18L8.19 7.38c.03-.1.06-.21.1-.33.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.08 0 .12.03.13.08l3.65 10.3c.03.109 0 .16-.1.16zm3.4-.15c0 .11-.039.16-.129.16H16.01c-.1 0-.15-.061-.15-.16v-7.7c0-.1.041-.14.131-.14h1.98c.09 0 .129.05.129.14v7.7zm-.209-9.03c-.231.24-.571.37-.911.35-.33.01-.65-.12-.891-.35-.23-.25-.35-.58-.34-.92-.01-.34.12-.66.359-.89.242-.23.562-.35.892-.35.391 0 .689.12.91.35.22.24.34.56.33.89.01.34-.11.67-.349.92z" />
      </svg>
    ),
  },
]
