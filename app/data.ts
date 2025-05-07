type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    id: 'qsarion',
    name: 'QSARion AI Agent',
    description:
      'A chemical AI agent that can predict molecular properties given a substance.',
    video:
      'https://res.cloudinary.com/dofjdeyrh/video/upload/v1742207519/qsarion_qurfwo.mp4',
    link: 'https://huggingface.co/spaces/alarv/QSARion-smolagents',
  },
  {
    id: 'jaqpot',
    name: 'Jaqpot',
    description:
      'A machine learning model hosting platform, handling deployment, API management, and fine-tuning.',
    video:
      'https://res.cloudinary.com/dofjdeyrh/video/upload/v1742208147/jaqpot_iehfis.mp4',
    link: 'https://jaqpot.org',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: 'ntua',
    title: 'Machine Learning Engineer',
    company: 'National Technical University of Athens',
    start: 'Feb 2024',
    end: 'Present',
    link: 'https://jaqpot.org',
  },
  {
    id: 'mercedes',
    title: 'Senior Full-stack Engineer',
    company: 'Mercedes Benz via Mimacom',
    start: 'Feb 2023',
    end: 'Feb 2024',
    link: 'https://www.mercedes-benz.io/',
  },
  {
    id: 'gigabank',
    title: 'Senior Full-stack Engineer',
    company: 'Gigabank',
    start: 'Jul 2022',
    end: 'Feb 2023',
    link: 'https://gigabank.jp',
  },
  {
    id: 'impala',
    title: 'Senior Full-stack Engineer',
    company: 'Impala Travel',
    start: 'Mar 2021',
    end: 'Jun 2022',
    link: 'https://impala.travel/',
  },
  {
    id: 'glovo',
    title: 'Senior Full-stack Engineer',
    company: 'Glovo',
    start: 'Feb 2020',
    end: 'Feb 2021',
    link: 'https://glovoapp.com',
  },
  {
    id: 'telefonica',
    title: 'Senior Full-stack Engineer',
    company: 'Alpha Innovation, Telefonica',
    start: 'Nov 2018',
    end: 'Feb 2020',
    link: 'https://perspectives.health/',
  },
  {
    id: 'marfeel',
    title: 'Full-stack Engineer',
    company: 'Marfeel',
    start: 'Apr 2016',
    end: 'Nov 2018',
    link: 'https://marfeel.com',
  },
  {
    id: 'cern',
    title: 'Summer Student',
    company: 'CERN',
    start: 'Jun 2014',
    end: 'Sep 2014',
    link: 'https://cern.ch',
  },
  {
    id: 'eurodyn',
    title: 'Full-stack Engineer',
    company: 'European Dynamics',
    start: 'Apr 2014',
    end: 'Apr 2016',
    link: 'https://eurodyn.com',
  },
  {
    id: 'sapila',
    title: 'Full-stack Engineer',
    company: 'Sapila.gr (Personal Project)',
    start: '2014',
    end: '2020',
    link: 'https://sapila.gr',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'I asked AI about the future of AI (Yes, AI-ception)',
    description:
      'I wanted to know: where is AI going in the next 10+ years? Is diving deeper into large language models (LLMs) in 2025 still a good bet for developers like me? What jobs will rise? What skills will matter?',
    link: '/blog/ai-job-trends-2035-aiception',
    uid: 'blog/ai-job-trends-2035-aiception',
  },
  {
    title: 'Decisions. Decisions. Decisions',
    description:
      'How the impact of decisions at the right time is important for a fast-moving startup',
    link: '/blog/decisions-decisions-decisions',
    uid: 'blog/decisions-decisions-decisions',
  },
  {
    title: "The plant that couldn't bloom",
    description:
      'There was a time I thought I wasn’t good enough. That I didn’t belong in tech. That I just couldn’t keep up.',
    link: '/blog/the-plant-that-could-not-bloom',
    uid: 'blog/the-plant-that-could-not-bloom',
  },
  {
    title: 'The art of the API abstraction',
    description: 'What is an API and how its abstraction is an art',
    link: '/blog/the-art-of-the-api-abstraction',
    uid: 'blog/the-art-of-the-api-abstraction',
  },
  {
    title:
      'Deploy a streaming LLM with Terraform, Kubernetes and vLLM: the complete stack (part 2)',
    description:
      'How to deploy an LLM on your own infra with terraform, Kubernetes and vLLM',
    link: '/blog/run-and-deploy-an-llm-part2',
    uid: 'run-and-deploy-an-llm-part2',
  },
  {
    title:
      'Building a streaming LLM with Next.js, FastAPI & Docker: the complete stack (part 1)',
    description: 'How to build a simple streaming API using Llama',
    link: '/blog/run-and-deploy-an-llm-part1',
    uid: 'run-and-deploy-an-llm-part1',
  },
  {
    title: 'The death of boring docs',
    description: 'How frameworks with long documentations have failed',
    link: '/blog/the-death-of-boring-docs',
    uid: 'the-death-of-boring-docs',
  },
  {
    title:
      'The overlooked emotional needs of senior professionals in tech companies',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/the-overlooked-emotional-needs-of-senior-professionals',
    uid: 'the-overlooked-emotional-needs-of-senior-professionals',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', link: 'https://github.com/alarv' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/alexarvanitidis/' },
]

export const EMAIL = 'alarvfm@gmail.com'
