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
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title:
      'The overlooked emotional needs of senior professionals in tech companies',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', link: 'https://github.com/alarv' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/alexarvanitidis/' },
]

export const EMAIL = 'alarvfm@gmail.com'
