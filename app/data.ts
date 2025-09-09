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
  image: string
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
  {
    id: 'readon',
    name: 'Readon.gr',
    description:
      'A Greek social platform for open discussion, community building, and content sharing through posts, comments, and voting.',
    video:
      'https://res.cloudinary.com/dofjdeyrh/video/upload/v1753191776/readon_pwnaja.mp4',
    link: 'https://readon.gr',
  },
  {
    id: 'geras',
    name: 'Geras',
    description:
      'A silly little game I developed with Phaser 3 during the Covid19 quarantine.',
    video:
      'https://res.cloudinary.com/dofjdeyrh/video/upload/v1753191994/geras_dp0cou.mp4',
    link: 'https://alarv.github.io',
  },
  {
    id: 'winnie',
    name: 'Winnie',
    description:
      'A Command Line Interface (CLI) consuming an actively written-to CLF HTTP access log written with Node.js',
    video:
      'https://res.cloudinary.com/dofjdeyrh/video/upload/v1753196650/winnielog_-_HD_1080p_c2nrtr.mov',
    link: 'https://github.com/alarv/winnie',
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
    image: '/companies/ntua-logo.webp',
  },
  {
    id: 'mercedes',
    title: 'Senior Full-stack Engineer',
    company: 'Mercedes Benz via Mimacom',
    start: 'Feb 2023',
    end: 'Feb 2024',
    link: 'https://www.mercedes-benz.io/',
    image: '/companies/mbio.jpg',
  },
  {
    id: 'gigabank',
    title: 'Senior Full-stack Engineer',
    company: 'Gigabank',
    start: 'Jul 2022',
    end: 'Feb 2023',
    link: 'https://play.google.com/store/apps/details?id=jp.gigabank.app&hl=en',
    image: '/companies/gigabank_logo.jpeg',
  },
  {
    id: 'impala',
    title: 'Senior Full-stack Engineer',
    company: 'Impala Travel',
    start: 'Mar 2021',
    end: 'Jun 2022',
    link: 'https://impala.travel/',
    image: '/companies/impala-logo.jpeg',
  },
  {
    id: 'glovo',
    title: 'Senior Full-stack Engineer',
    company: 'Glovo',
    start: 'Feb 2020',
    end: 'Feb 2021',
    link: 'https://glovoapp.com',
    image: '/companies/glovo.png',
  },
  {
    id: 'telefonica',
    title: 'Senior Full-stack Engineer',
    company: 'Alpha Innovation, Telefonica',
    start: 'Nov 2018',
    end: 'Feb 2020',
    link: 'https://perspectives.health/',
    image: '/companies/alpha-innovation.jpg',
  },
  {
    id: 'marfeel',
    title: 'Full-stack Engineer',
    company: 'Marfeel',
    start: 'Apr 2016',
    end: 'Nov 2018',
    link: 'https://marfeel.com',
    image: '/companies/marfeel.png',
  },
  {
    id: 'cern',
    title: 'Summer Student',
    company: 'CERN',
    start: 'Jun 2014',
    end: 'Sep 2014',
    link: 'https://cern.ch',
    image: '/companies/CERN_logo.jpg',
  },
  {
    id: 'eurodyn',
    title: 'Full-stack Engineer',
    company: 'European Dynamics',
    start: 'Apr 2014',
    end: 'Apr 2016',
    link: 'https://eurodyn.com',
    image: '/companies/eurodyn.png',
  },
  {
    id: 'sapila',
    title: 'Full-stack Engineer',
    company: 'Sapila.gr (Personal Project)',
    start: '2014',
    end: '2020',
    link: 'https://sapila.gr',
    image: '/companies/sapila-logo.png',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "The 5 worst bugs I've seen on production - #1 the N+1 problem",
    description:
      'A tiny JOIN turned one request into ~100 queries—the graph looked like a heartbeat.',
    link: '/blog/worst-bugs-n-plus-one',
    uid: 'blog/worst-bugs-n-plus-one',
  },
  {
    title: "The 5 worst bugs I've seen on production - #2 the infinite crawler",
    description:
      "A 'Back to start' button shared the Next selector, looping forever and flooding the DB.",
    link: '/blog/worst-bugs-infinite-crawler',
    uid: 'blog/worst-bugs-infinite-crawler',
  },
  {
    title:
      "The 5 worst bugs I've seen on production - #3 the €300,000 double refund",
    description:
      'A refund path ran twice for 15 minutes, costing €300k before a sanity check caught it.',
    link: '/blog/worst-bugs-double-refund-300k',
    uid: 'blog/worst-bugs-double-refund-300k',
  },
  {
    title: "The 5 worst bugs I've seen on production - #4 the $60 otp ddos",
    description:
      'An OTP endpoint was abused across many IPs; budget burned twice after no action items.',
    link: '/blog/worst-bugs-60-dollar-ddos',
    uid: 'blog/worst-bugs-60-dollar-ddos',
  },
  {
    title:
      "The 5 worst bugs I've seen on production - #5 the animation memory leak",
    description:
      'Long sessions leaked ~2MB per animation; snapshots revealed unreleased lottie instances.',
    link: '/blog/worst-bugs-mobile-memory-leak',
    uid: 'blog/worst-bugs-mobile-memory-leak',
  },
  {
    title: 'Microlearning is the new way to learn',
    description:
      'How I use microlearning to keep up with fast-moving tech trends through short, daily doses of content across social media and YouTube.',
    link: '/blog/microlearning-is-the-new-learning',
    uid: 'blog/microlearning-is-the-new-learning',
  },
  {
    title: "Coding with Claude code and LLMs: What I've learned after 3 months",
    description:
      'Reflections on working daily with Claude Code and LLMs for three months, the benefits of full repo context, and why experience still matters.',
    link: '/blog/coding-with-claude-code-and-llms',
    uid: 'blog/coding-with-claude-code-and-llms',
  },
  {
    title: 'My experience with arrogant developers',
    description:
      'A reflection on developer culture, code consistency, and the damage caused by ego-driven decisions in software teams.',
    link: '/blog/my-experience-with-arrogant-developers',
    uid: 'blog/my-experience-with-arrogant-developers',
  },
  {
    title: 'The luxury of letting ideas marinate',
    description:
      'This post explores the power of letting ideas sit. It reflects on how having time, space, and a clear mind can lead to better solutions ,  especially in engineering and research. It contrasts rushed patches with well-thought-out fixes that emerge when pressure is low and the mind is calm.',
    link: '/blog/the-luxury-of-letting-ideas-marinate',
    uid: 'blog/the-luxury-of-letting-ideas-marinate',
  },
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

export const EMAIL = 'alex.arvanitidis0@gmail.com'
