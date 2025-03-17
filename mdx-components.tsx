import { formatDistance } from 'date-fns/formatDistance'
import type { MDXComponents } from 'mdx/types'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

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
    },
    code(props) {
      const { children, className, ...rest } = props;
      const match = /language-(\w+)/.exec(className || '');
      return match ? (
        <SyntaxHighlighter
          PreTag="div"
          lineProps={{
            style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' },
          }}
          // eslint-disable-next-line react/no-children-prop
          children={String(children).replace(/\n$/, '')}
          wrapLines
          wrapLongLines
          language={match[1]}
          style={materialDark}
        />
      ) : (
        <code {...rest} className={className}>
          {children}
        </code>
      );
    },
  }
}
