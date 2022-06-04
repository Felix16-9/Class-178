let latitude=22.7868542, longitude=88.3643296;

var map = new mapboxgl.Map({
    container: 'map',
    style: '',
    center:[longitude, latitude],
    zoom: 16
});

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    'top-left'
)