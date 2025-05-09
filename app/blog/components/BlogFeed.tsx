'use client'

import { AnimatedBackground } from '@/components/ui/animated-background'
import { BLOG_POSTS } from '@/app/data'
import Link from 'next/link'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

interface BlogFeedProps {
  page: number
}

const PAGE_SIZE = 10

export default function BlogFeed({ page }: BlogFeedProps) {
  const blogPage = BLOG_POSTS.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
  const totalPages = Math.ceil(BLOG_POSTS.length / PAGE_SIZE)

  return (
    <>
      <Link href="/blog/1">
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
      </Link>
      <div className="flex flex-col space-y-0">
        <div className="flex flex-col gap-5">
          <div>
            {blogPage.map((post) => (
              <AnimatedBackground
                enableHover
                className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
                transition={{
                  type: 'spring',
                  bounce: 0,
                  duration: 0.2,
                }}
                key={post.uid}
              >
                <Link
                  className="-mx-3 rounded-xl p-3 no-underline"
                  href={post.link}
                  data-id={post.uid}
                >
                  <div className="flex flex-col space-y-1">
                    <h4 className="my-2 font-medium font-semibold dark:text-zinc-100">
                      {post.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {post.description}
                    </p>
                  </div>
                </Link>
              </AnimatedBackground>
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                {page > 1 && (
                  <PaginationItem>
                    <PaginationPrevious href={`/blog/${page - 1}`} />
                  </PaginationItem>
                )}
                <PaginationItem>
                  <PaginationLink href="#">{page}</PaginationLink>
                </PaginationItem>
                {/*<PaginationItem>*/}
                {/*  <PaginationEllipsis />*/}
                {/*</PaginationItem>*/}
                {page < totalPages && (
                  <PaginationItem>
                    <PaginationNext href={`/blog/${page + 1}`} />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </div>
    </>
  )
}
