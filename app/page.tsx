import { Metadata } from 'next'
import Home from '@/app/components/home'

export const metadata: Metadata = {
  title: 'Alex Arvanitidis - Machine Learning Engineer & Full-Stack engineer',
  description: 'A portfolio of my work, experience and my blog',
}

export default function Page() {
  return <Home />
}
