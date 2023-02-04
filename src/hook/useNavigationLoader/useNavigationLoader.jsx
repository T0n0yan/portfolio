import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

const useNavigationLoader = () => {
    const location = useLocation()
    const [isLoading, setIsLoading] = useState(false)
   
    useEffect(() => {
        setIsLoading(true)
        let myTimeOut = setTimeout(() => {
            setIsLoading(false)
        }, 1800)

        return () => {
            clearTimeout(myTimeOut)
        }


    }, [location])


    return {isLoading}
}
export default useNavigationLoader