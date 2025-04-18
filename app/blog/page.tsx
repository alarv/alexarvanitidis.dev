import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title:
    'Blog | Alex Arvanitidis - Machine Learning Engineer & Full-Stack engineer',
  description:
    'Personal blog by Alex Arvanitidis, sharing insights on machine learning, software engineering, web development, and personal growth. Follow along for tutorials, thoughts on tech trends, and behind-the-scenes on building Jaqpot and other projects.',
}

export default function Page() {
  redirect(`/blog/1`)
}
