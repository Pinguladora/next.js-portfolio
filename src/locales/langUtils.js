import { en, es, fr } from 'make-plural/plurals'

// Anounce which locales are going to be used and connect them to approprite plural rules
export function startTranslation(i18n) {
  i18n.loadLocaleData({
    es: { plurals: es },
    en: { plurals: en },
    fr: { plurals: fr },
    pseudolocale: { plurals: en }
  })
}

export async function loadTranslation(locale) {
  let data
  if (process.env.NODE_ENV === 'production') {
    data = await import(`./${locale}/messages`)
  } else {
    data = await import(
      `@lingui/loader!./${locale}/messages.po`
    )
  }

  return data.messages
}