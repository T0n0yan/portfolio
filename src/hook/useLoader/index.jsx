import {useEffect, useLayoutEffect, useState} from "react";
// import sound from  '../../assets/sounds/reloade Sound.mp3'

const usePreloader = () => {
    const [loading, setLoading] = useState(false)
    // const [reloadSound,setReloadSound] =useState(new Audio(sound))
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])


    return {loading}
}
export default usePreloader