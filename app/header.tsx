'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex justify-between">
      <div className="flex w-full flex-row items-center gap-5">
        <Link href="/">
          <div className="z-10 cursor-pointer" draggable="false">
            <Image
              alt="Photo of Alex Arvanitidis"
              width={72}
              height={72}
              src="/alex-arvanitidis.jpg"
              className="rounded-full"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-between gap-1 tracking-wide">
          <Link href="/" className="font-medium text-black dark:text-white">
            Alex Arvanitidis
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Machine Learning Engineer
          </TextEffect>
        </div>
      </div>
    </header>
  )
}
