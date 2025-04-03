import { AnimatedBackground } from '@/components/ui/animated-background'
import { BLOG_POSTS } from '@/app/data'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Blog | Alex Arvanitidis - Machine Learning Engineer & Full-Stack engineer',
  description:
    'Personal blog by Alex Arvanitidis, sharing insights on machine learning, software engineering, web development, and personal growth. Follow along for tutorials, thoughts on tech trends, and behind-the-scenes on building Jaqpot and other projects.',
}

export default function Page() {
  return (
    <>
      <h3 className="mb-3 text-lg font-medium">Blog</h3>
      <div className="flex flex-col space-y-0">
        <AnimatedBackground
          enableHover
          className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
          transition={{
            type: 'spring',
            bounce: 0,
            duration: 0.2,
          }}
        >
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.uid}
              className="rounded-xl p-1 no-underline"
              href={post.link}
              data-id={post.uid}
            >
              <div className="flex flex-col space-y-1">
                <h4 className="font-normal dark:text-zinc-100">{post.title}</h4>
                <p className="text-zinc-500 dark:text-zinc-400">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </AnimatedBackground>
      </div>
    </>
  )
}
