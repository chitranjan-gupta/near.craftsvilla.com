import "../styles/map.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import { usePosition } from "../context/position";

function LocationMarker() {
    const { position, setPosition } = usePosition()
    const map = useMapEvents({
        click() {
            map.locate();
        },
        locationfound(e) {
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
        },
    })
    return position === null ? null : (
        <Marker position={position}>
            <Popup>
                <button className="btn bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#productlist" aria-expanded="false" aria-controls="productlist">
                    Open
                </button>
            </Popup>
        </Marker>
    )
}

const Map = () => {
    const position = [25.5940947, 85.1375645];
    return <div style={{ transform: "translateY(-40px)" }}>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ zIndex: "10", }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
        </MapContainer>
    </div>
}

export default Map;
