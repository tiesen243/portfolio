interface Project {
  slug?: string
  title: string
  preview: string
  description: string
  link: string
  repo: string
  tags: string[]
}

export const projects: Project[] = [
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
    slug: 'yuki',
    title: 'Yuki',
    preview:
      'My e-commerce project is a user-friendly marketplace with admin tools. Shoppers can browse, buy, and manage their accounts.',
    description:
      'My e-commerce project is a comprehensive online marketplace that offers a seamless shopping experience. Users can create accounts using email and password or connect through Discord for convenient login. The admin dashboard provides powerful tools for managing users, categories, products, and orders. Shoppers can browse and purchase products, easily adding items to their cart. Users have the flexibility to update their personal information, ensuring a personalized experience.',
    link: 'https://yuki.tiesen.id.vn',
    repo: 'https://github.com/tiesen243/yuki',
    tags: ['Next.js', 'Tailwind CSS', 'tRPC', 'Prisma', 'Uploadthing', 'Lucia', 'Arctic', 'Resend'],
  },
  {
    slug: 'egg-community',
    title: 'Egg Community',
    preview:
      'My social platform is an interactive online community where users can share content and engage with others.',
    description:
      'My social platform is a dynamic online community where users can interact and share content. Key features include authentication for user accounts, the ability to create, read, update, and delete (CRUD) posts and comments, and personalized user profiles. Additionally, users can follow or unfollow other members to tailor their content feed. The platform supports image uploads, allowing for visually engaging posts and a rich user experience.',
    link: 'https://egg-community.vercel.app',
    repo: 'https://github.com/tiesen243/egg-community',
    tags: ['Next.js', 'Tailwind CSS', 'ElysiaJS', 'Prisma', 'Cloudinary', 'Lucia', 'Resend'],
  },
  {
    title: 'Digit Recognization',
    preview:
      'My digit recognition project uses a Convolutional Neural Network (CNN) to accurately identify handwritten digits.',
    description:
      'My digit recognition project involved developing a Convolutional Neural Network (CNN) from scratch to accurately identify handwritten digits from the MNIST dataset. The CNN architecture incorporates convolutional layers for feature extraction and fully connected layers for classification. Through training on the extensive MNIST dataset, the model learns to effectively distinguish between different digit patterns, achieving high accuracy in digit recognition tasks.',
    link: '',
    repo: 'https://github.com/tiesen243/digit-recognization',
    tags: ['Python', 'CNN', 'NumPy', 'MNIST'],
  },
]

export const designs = [
  '/design/tiesen-v1.png',
  '/design/goldenglow.png',
  '/design/lin-yushia.png',
  '/design/tiesen-v2.png',
]
