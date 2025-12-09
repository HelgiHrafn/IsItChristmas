import { useState } from 'react'
import './App.css'
import { isSameDay } from 'date-fns'
import christmasGif from './assets/santa-santa-claus.gif'
import sadGif from './assets/sad.gif'

const today = new Date()
const christmas = new Date(today.getFullYear(), 11, 24) // 11 = December

const isChristmas =
  isSameDay(today, christmas) ||
  isSameDay(today, new Date(today.getFullYear(), 11, 25))

const browserLang = navigator.language || navigator.userLanguage // e.g. "en-US", "is-IS"

// Simple translations per language
const messages = {
  en: {
    yes: 'Yes, it is Christmas!',
    no: 'No, it is not Christmas.',
    label: 'Language',
    en: 'English',
    is: 'Icelandic',
    es: 'Spanish',
    de: 'German',
  },
  is: {
    yes: 'Já, það eru jól!',
    no: 'Nei, það eru ekki jól.',
    label: 'Tungumál',
    en: 'Enska',
    is: 'Íslenska',
    es: 'Spænska',
    de: 'Þýska',
  },
  es: {
    yes: '¡Sí, es Navidad!',
    no: 'No, no es Navidad.',
    label: 'Idioma',
    en: 'Inglés',
    is: 'Islandés',
    es: 'Español',
    de: 'Alemán',
  },
  de: {
    yes: 'Ja, es ist Weihnachten!',
    no: 'Nein, es ist nicht Weihnachten.',
    label: 'Sprache',
    en: 'Englisch',
    is: 'Isländisch',
    es: 'Spanisch',
    de: 'Deutsch',
  },
}

const initialLang = browserLang.startsWith('is')
  ? 'is'
  : browserLang.startsWith('es')
    ? 'es'
    : browserLang.startsWith('de')
      ? 'de'
      : 'en'

function App() {
  const [language, setLanguage] = useState(initialLang)
  const t = messages[language]

  return (
    <div>
      <div>
        {t.label}:{' '}
        <button onClick={() => setLanguage('en')}>{t.en}</button>
        <button onClick={() => setLanguage('is')}>{t.is}</button>
        <button onClick={() => setLanguage('es')}>{t.es}</button>
        <button onClick={() => setLanguage('de')}>{t.de}</button>
      </div>

      <h1>{isChristmas ? t.yes : t.no}</h1>
      {isChristmas ? (
        <img src={christmasGif} alt="Christmas gif" />
      ) : (
        <img src={sadGif} alt="Not Christmas gif" />
      )}
    </div>
  )
}

export default App
