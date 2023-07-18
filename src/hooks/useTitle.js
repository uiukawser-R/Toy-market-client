import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
        document.title=`Toy Market | ${title}`;
    },[title])
}

export default useTitle; 