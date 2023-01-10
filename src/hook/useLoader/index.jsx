import {useEffect, useState} from "react";
import reloadSound from '../../assets/sounds/reloadeSound.mp3'


const usePreloader = () => {
    const [loading, setLoading] = useState(false)
    const [testSound, setTestSound] = useState(new Audio(reloadSound))
    useEffect(() => {
        setTestSound(() => testSound.play())
        setLoading(!loading)
       let myTimeOut = setTimeout(() => {
            setTestSound(() => testSound.pause())
            setLoading(false)
        }, 1000)

        return () => {
            clearTimeout(myTimeOut)
        }

    }, [])


    return {loading, testSound}
}
export default usePreloader