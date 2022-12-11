import {useEffect,  useState} from "react";
import reloadSound from '../../assets/sounds/reloadeSound.mp3'




const usePreloader = () => {
    const [loading, setLoading] = useState(false)
    const [testSound,setTestSound] = useState(new Audio(reloadSound))
    useEffect(() => {
        testSound.play()
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            testSound.pause()
        }, 1000)
    }, [])


    return {loading,testSound}
}
export default usePreloader