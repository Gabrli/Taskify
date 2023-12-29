import { useEffect, useState } from "react";

function useCurrentLocation(){
    const [location, setLocation] = useState("")

    useEffect(() => {
        let currentLocation = window.location.pathname
        setLocation(currentLocation)
    }, [location])

    return location
}

export default useCurrentLocation 