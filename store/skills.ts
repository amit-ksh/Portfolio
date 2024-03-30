export const languages: string[] = ['python', 'js', 'typescript']

export const web: string[] = [
  'html',
  'css',
  'react',
  'vue',
  'nextjs',
  'chakraui',
  'tailwindcss',
  'node',
  'express',
  'prisma',
  'postgres',
] as const

export const ml: string[] = [
  'numpy',
  'pandas',
  'matplotlib',
  'scikit-learn',
  'pytorch',
] as const

export const logoToNameMap: { [key: string]: string } = {
  // Languages
  python: 'Python',
  js: 'JavaScript',
  typescript: 'TypeScript',
  // WEB
  html: 'HTML',
  css: 'CSS',
  react: 'React',
  vue: 'Vue',
  nextjs: 'Next.JS',
  nuxt: 'Nuxt.JS',
  threejs: 'three.js',
  chakraui: 'ChakraUI',
  tailwindcss: 'TailwindCSS',
  nextui: 'NextUI',
  'shadcn-ui': 'shadcn/ui',
  node: 'Node.js',
  express: 'Express.js',
  prisma: 'Prisma',
  postgres: 'PostgreSQL',
  mongodb: 'Mongo DB',
  convex: 'Convex',
  gsap: 'GSAP',
  flask: 'Flask',
  meilisearch: 'MeiliSearch',
  socketio: 'Socket.io',
  nylas: 'Nylas',
  // ML
  numpy: 'numpy',
  pandas: 'pandas',
  matplotlib: 'matplotlib',
  'scikit-learn': 'scikit learn',
  pytorch: 'PyTorch',
  'aws-sagemaker': 'AWS Sagemaker',
  autogluon: 'Autogluon',
  openai: 'OpenAI',
  pinecone: 'Pinecone',
  // Hosting
  vercel: 'Vercel',
  netlify: 'netlify',
  pypi: 'PyPi',
  kaggle: 'Kaggle',
  // Cloud
  'aws-lambda': 'AWS Lambda',
  'aws-s3': 'AWS S3',
  'aws-step-functions': 'AWS Step Functions',
  'aws-sns': 'AWS SNS',
  'azure-translate': 'Azure Translate',
} as const
