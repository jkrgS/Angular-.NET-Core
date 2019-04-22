export function MapArrayUserList(mapGeoData: any[], mapGeoDT: any[]) {
  mapGeoData.forEach(m => {
    if (m.add) {
      mapGeoDT.push({ id: m.id, lng: +m.lng, lat: +m.lat, city: m.city });
    } else {
      const index = mapGeoDT.findIndex(x => x.id === m.id);
      if (index > -1) {
        mapGeoDT.splice(index, 1);
      }
    }
  });

  return mapGeoDT;
}

export function MapArrayUserCards(
  addresses: any[],
  mapGeoData: any[],
  mapButton: boolean
) {
  addresses.forEach(m => {
    mapGeoData.push({
      id: m.id,
      lng: +m.longitude,
      lat: +m.latitude,
      city: m.city,
      add: mapButton // true = push data / false = pop data
    });
  });

  return mapGeoData;
}
