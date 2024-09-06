export const discountPrice = (price, discount) => {
    return (price - ((discount / 100) * price));
}

export const camelCase = (text) => {
    return text.replace(text.charAt(0), text.charAt(0).toUpperCase())
}

export function getLocation(setPosition) {
    function success(pos) {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        const accuracy = pos.coords.accuracy;
        setPosition({ lat: lat, lng: lng })
        // if (map) {
        //     map.flyTo({ lat: lat, lng: lng }, map.getZoom());
        // }
    }
    function error(err) {
        if (err.code === 1) {
            console.log("access denied")
        } else {
            console.log(err);
        }
    }
    if (typeof window !== "undefined") {
        navigator.geolocation.getCurrentPosition(success, error);
    }
}
