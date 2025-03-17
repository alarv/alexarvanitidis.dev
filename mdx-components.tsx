import { formatDistance } from 'date-fns/formatDistance'
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <figure>
          <img src={src} alt={alt} className="rounded-xl" />
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      )
    },
    PublishedOn: ({
      date
    }: {
      date: Date
    }) => {
      return (
        <p title={date.toLocaleDateString()} className='text-gray-500'>Published {formatDistance(date, new Date(), { addSuffix: true })}</p>
      )
    }
  }
}
