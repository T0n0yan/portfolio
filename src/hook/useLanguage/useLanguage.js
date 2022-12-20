import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import useLocalStorage from "./useLocalStorage";



let Languages = {
    english: 'en',
    russian:'ru',
    armenian:'hy'
}

const useLanguage = () => {
    const {i18n} = useTranslation()
    const [language, setLanguage] = useLocalStorage('language', '')
    useEffect(() => {
        if (!language) {
            setLanguage(Languages[Languages.armenian])
        } else {
            setLanguage(language)
        }
    }, [])

    const changeLanguage = (data) => {
        i18n.changeLanguage(data)
        setLanguage(data)
    }
    return {changeLanguage, language}
}
export default useLanguage
