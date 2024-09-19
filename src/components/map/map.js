import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FzaGFzdHIiLCJhIjoiY20wMjRlM3duMXhsODJtc2l6ZTFkbTRzaCJ9.NLkE3wxabRW9ub6jIhkD0Q";

function loadStyle(url) {
  let index = window.document.getElementsByTagName("link")[0];
  let link = window.document.createElement("link");
  link.href = url;
  link.rel = "stylesheet";
  index.parentNode.insertBefore(link, index);
}

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    // Initialize map only once
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [24.1723, 50.7377], // Coordinates for center
      zoom: 16,
    });

    // Add marker at the center
    new mapboxgl.Marker()
      .setLngLat([24.1723, 50.7377]) // Coordinates for marker
      .addTo(map);

    loadStyle("https://api.mapbox.com/mapbox-gl-js/v1.3.0/mapbox-gl.css");
    // Clean up on unmount
    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapContainerRef}
      className="rounded"
      style={{ width: "100%", height: "40svh" }}
    />
  );
};

export default Map;
