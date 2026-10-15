'use client'

import Link from 'next/link'
import { BLOG_POSTS } from '@/app/data'

const RELATED_COUNT = 3

export default function RelatedPosts({ pathname }: { pathname: string }) {
  const index = BLOG_POSTS.findIndex((post) => post.link === pathname)
  if (index === -1) return null

  // The posts that follow the current one in the feed, wrapping around, so
  // every article leads to a different set of suggestions.
  const related = Array.from(
    { length: Math.min(RELATED_COUNT, BLOG_POSTS.length - 1) },
    (_, i) => BLOG_POSTS[(index + 1 + i) % BLOG_POSTS.length],
  )

  return (
    <section className="my-10">
      <h2 className="text-lg font-medium">Related articles</h2>
      <div className="flex flex-col">
        {related.map((post) => (
          <Link
            key={post.uid}
            href={post.link}
            className="-mx-3 rounded-xl p-3 no-underline hover:bg-zinc-100 dark:hover:bg-zinc-900/80"
          >
            <div className="flex items-center gap-4">
              {post.image && (
                <img
                  src={post.image}
                  alt=""
                  loading="lazy"
                  className="my-0 h-16 w-16 shrink-0 rounded-lg object-cover"
                />
              )}
              <div className="flex flex-col space-y-1">
                <h4 className="my-0 font-medium dark:text-zinc-100">
                  {post.title}
                </h4>
                <p className="my-0 text-zinc-500 dark:text-zinc-400">
                  {post.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
