import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Roboto:wght@100&display=swap" rel="stylesheet" />
      </Head >
      <body className='no-scrollbar'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
