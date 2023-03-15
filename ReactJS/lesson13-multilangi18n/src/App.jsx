import React from 'react'
import './lang/i18n'
import { useTranslation } from 'react-i18next';
const App = () => {
    const { t, i18n } = useTranslation();
    const handleClick =(lang)=>{
            i18n.changeLanguage(lang)
    }
  return (
    <div>
        <button onClick={()=>{handleClick('az')}}>az</button>
        <button onClick={()=>{handleClick('en')}}>en</button>
        <button onClick={()=>{handleClick('es')}}>es</button>
        <p>{t('a.0')}</p>

    </div>
  )
}

export default App