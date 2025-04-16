import { Metadata } from 'next'
import BlogFeed from '@/app/blog/components/BlogFeed'

export const metadata: Metadata = {
  title:
    'Blog | Alex Arvanitidis - Machine Learning Engineer & Full-Stack engineer',
  description:
    'Personal blog by Alex Arvanitidis, sharing insights on machine learning, software engineering, web development, and personal growth. Follow along for tutorials, thoughts on tech trends, and behind-the-scenes on building Jaqpot and other projects.',
}

export default function Page({ params }: { params: { page: string } }) {
  const { page } = params
  const pageNum = parseInt(page as string, 10)

  return (
    <div className="not-prose">
      <BlogFeed page={pageNum} />
    </div>
  )
}
