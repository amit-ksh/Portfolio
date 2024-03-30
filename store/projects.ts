export interface Project {
  image: string
  title: string
  description: string
  techStack: string[]
  tags: string[]
  url: {
    github?: string
    website?: string
  }
}

export const ml: Project[] = [
  {
    image: '/svg/projects/scones-unlimited.svg',
    title: 'Scones Unlimited',
    description:
      'An image classification model that can automatically detect which kind of vehicle delivery drivers have.',
    techStack: [
      'python',
      'aws-sagemaker',
      'aws-lambda',
      'aws-step-functions',
      'aws-s3',
      'aws-sns',
      'numpy',
      'matplotlib',
      'pandas',
    ],
    tags: ['ai-ml'],
    url: {
      github:
        'https://github.com/amit-ksh/ML-Workflow-for-Scones-Unlimited-on-Sagemaker',
    },
  },
  {
    image: '/svg/projects/landmark-classification.svg',
    title: 'Landmark Classification & Tagging for Social Media',
    description:
      'An image classification model that predicts the location of the images based on landmarks depicted in the image.',
    techStack: ['python', 'pytorch', 'numpy', 'matplotlib'],
    tags: ['ai-ml'],
    url: {
      github: 'https://github.com/amit-ksh/landmark-classification/',
    },
  },
  {
    image: '/svg/projects/flower-classifier.svg',
    title: 'Flower Classifier',
    description:
      "A CLI application that trains the pretrained Neural Netwrok and uses that for predicting the flower's name",
    techStack: ['python', 'pytorch', 'numpy'],
    tags: ['ai-ml'],
    url: {
      github: 'https://github.com/amit-ksh/Flower-Classifier',
    },
  },
  {
    image: '/svg/projects/bike-sharing-demand.svg',
    title: 'Bike Sharing Demand',
    description:
      'ML model built using AutoGluon that predicts the bike sharing demand.',
    techStack: ['python', 'autogluon', 'pandas', 'kaggle'],
    tags: ['ai-ml'],
    url: {
      github: 'https://github.com/amit-ksh/bike-sharing-demand/',
    },
  },
  {
    image: '/svg/projects/gnb.svg',
    title: 'Gaussian & Binomial Distribution Analyzer',
    description:
      'A python package that helps to analyze the Gaussian and Binomial Distributions',
    techStack: ['python', 'numpy', 'matplotlib', 'pypi'],
    tags: ['ai-ml'],
    url: {
      github:
        'https://github.com/amit-ksh/Udacity-AI-Programming-with-Python/tree/main/mini-projects/GnB_Distribution',
      website: 'https://pypi.org/project/gnb-distributions-analyzer/',
    },
  },
  // {
  //   image: '/svg/projects/handwritten-digits.svg',
  //   title: 'Handwritten Digits Classification',
  //   description:
  //     'Image classification model using MNIST dataset that classify the handwritten digits.',
  //   techStack: ['python', 'pytorch', 'numpy', 'matplotlib'],
  //   tags: ['ai-ml'],
  //   url: {
  //     github: 'https://github.com/amit-ksh/handwritten-digits-classifier/',
  //   },
  // },
]

export const web: Project[] = [
  {
    image: '/svg/projects/botforge.svg',
    title: 'BotForge',
    description:
      'BotForge is a real-time AI application for crafting AI bots, deployable within the application or integrated into other websites via a REST API.',
    techStack: [
      'nextjs',
      'convex',
      'openai',
      'pinecone',
      'nextui',
      'typescript',
    ],
    tags: ['web', 'ai-ml'],
    url: {
      github: 'https://github.com/amit-ksh/botforge',
    },
  },
  {
    image: '/svg/projects/mylo.svg',
    title: 'Mylo',
    description:
      'Mylo is an AI-powered web application that provides newsletter service to individuals and businesses to start their newsletter for their users or customers.',
    techStack: [
      'nextjs',
      'nylas',
      'azure-translate',
      'shadcn-ui',
      'tailwindcss',
      'tRPC',
      'typescript',
      'postgres',
    ],
    tags: ['web', 'ai-ml'],
    url: {
      github: 'https://github.com/amit-ksh/mylo',
    },
  },
  {
    image: '/svg/projects/endless-ecoQuest.svg',
    title: 'Endless EcoQuest',
    description:
      'Endless EcoQuest is an immersive endless racing experience built using Three.js and Socket.io.',
    techStack: ['js', 'threejs', 'socketio'],
    tags: ['web'],
    url: {
      github: 'https://github.com/amit-ksh/endless-ecoQuest',
      website: 'https://stackblitz.com/~/github.com/amit-ksh/endless-ecoQuest/',
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
    tags: ['web'],
    url: {
      github: 'https://github.com/amit-ksh/locknest',
      website: 'https://locknest.vercel.app/',
    },
  },
  {
    image: '/svg/projects/weatherapp.svg',
    title: 'the.weather',
    description:
      'Weather App is a React web app that shows the weather details from all around the world.',
    techStack: ['react', 'node', 'chakraui', 'netlify'],
    tags: ['web'],
    url: {
      github: 'https://github.com/amit-ksh/weather-app',
      website: 'https://your-weatherman.netlify.app/',
    },
  },
]
