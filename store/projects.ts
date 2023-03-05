export const projects: Array<{
  image: string
  title: string
  description: string
  techStack: string[]
  url: {
    github?: string
    website?: string
  }
}> = [
  {
    image: '/svg/projects/chorus.svg',
    title: 'Chorus',
    description:
      'Chorus is a Spotify clone built using Next.js, ChakraUI and MongoDB.',
    techStack: [
      'nextjs',
      'typescript',
      'chakraui',
      'prisma',
      'mongodb',
      'vercel',
    ],
    url: {
      github: 'https://github.com/amit-ksh/chorus',
      website: 'https://chours.vercel.app/',
    },
  },
  {
    image: '/svg/projects/locknest.svg',
    title: 'Locknest',
    description:
      "Locknest is the Progressive Web App(PWA) application that manages the user's passwords and other personal information in a single place.",
    techStack: [
      'nextjs',
      'typescript',
      'chakraui',
      'prisma',
      'postgres',
      'vercel',
    ],
    url: {
      github: 'https://github.com/amit-ksh/locknest',
      website: 'https://locknest.vercel.app/',
    },
  },
  {
    image: '/svg/projects/flower-classifier.svg',
    title: 'Flower Classifier',
    description:
      "A CLI application that trains the pretrained Neural Netwrok and uses that for predicting the flower's name",
    techStack: ['python', 'pytorch', 'numpy'],
    url: {
      github: 'https://github.com/amit-ksh/Flower-Classifier',
    },
  },
  {
    image: '/svg/projects/weatherapp.svg',
    title: 'the.weather',
    description:
      'Weather App is a React web app that shows the weather details from all around the world.',
    techStack: ['react', 'node', 'chakraui', 'netlify'],
    url: {
      github: 'https://github.com/amit-ksh/weather-app',
      website: 'https://your-weatherman.netlify.app/',
    },
  },
  {
    image: '/svg/projects/gnb.svg',
    title: 'GnB Distribution Analyzer',
    description:
      'A python package that helps to analyze the Gaussian and Binomial Distributions',
    techStack: ['python', 'numpy', 'matplotlib', 'pypi'],
    url: {
      github:
        'https://github.com/amit-ksh/Udacity-AI-Programming-with-Python/tree/main/mini-projects/GnB_Distribution',
      website: 'https://pypi.org/project/gnb-distributions-analyzer/',
    },
  },
  {
    image: '/svg/projects/homie.svg',
    title: 'homie',
    description:
      'A web app which uses the ML model to predicts the price of apartments situated in USA.',
    techStack: ['python', 'flask', 'scikit-learn', 'numpy', 'pandas'],
    url: {
      github: 'https://github.com/amit-ksh/homie/',
      website: 'https://homie.amit-ksh.repl.co',
    },
  },
  {
    image: '/svg/projects/portfolio.svg',
    title: 'Portfolio',
    description: 'Personal site showcasing my projects and online resume.',
    techStack: ['nuxt', 'tailwindcss', 'threejs', 'gsap', 'netlify'],
    url: {
      github: 'https://github.com/amit-ksh/Portfolio/',
      website: 'https://amit-ksh.netlify.app/',
    },
  },
]
