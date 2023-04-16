
import '@/styles/globals.css'
import Head from 'next/head'
import { Fragment } from 'react'
import { i18n } from '@lingui/core'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { I18nProvider } from '@lingui/react'
import { startTranslation, loadTranslation } from '../locales/langUtils'
import PageWrapper from '@/components/base/PageWrapper'

// Load plural rules for each locale
startTranslation(i18n)

export default function App({ Component, pageProps }) {

  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  useEffect(() => {
    loadTranslation(
      locale
    ).then((translation) => {
      i18n.load(locale, translation);
      i18n.activate(locale);
    })
      .catch((error) => {
        console.error(`Failed to load translation for ${locale}:`, error);
      });
  }, [locale]);

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon/favicon.ico" />
      </Head>
      <main className={`bg-light dark:bg-dark w-full min-h-screen`}>
        <I18nProvider i18n={i18n} forceRenderOnLocaleChange={false}>
          <PageWrapper Component={Component} pageProps={pageProps} />
        </I18nProvider>
      </main>
    </Fragment>
  )
}
