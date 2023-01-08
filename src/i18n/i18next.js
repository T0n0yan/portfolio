import {initReactI18next} from 'react-i18next'
import i18next from "i18next";
import en from '../languages/en.json'
import hy from '../languages/hy.json'
import ru from '../languages/ru.json'

i18next
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en
            },
            ru: {
                translation: ru
            },
            hy: {
                translation: hy
            }
        },
        lng: localStorage.getItem("lng") || "en",
    })
export default i18next