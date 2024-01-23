
// // map with marker
// let map;
// console.log("0")

// async function initMap(){
//     console.log("1")
//     const position = {lat: 5.2632, lng: 100.4846};

//     const {Map} = await google.maps.importLibrary("maps");
//     const {AdvancedMarkerElement} = await google.maps.importLibrary("marker");
//     console.log("3")

//     map = new Map(document.getElementById("map"), {
//         center: position,
//         zoom: 8,
//         mapId: "test_map",
//     });

//     console.log("4");

//     const marker = new AdvancedMarkerElement({
//         map: map,
//         position: position,
//         title: "Penang",
//     });

//     console.log("5");
// }

// initMap();

//----------------------------------------------------------------------
// map with firebase





async function initMap() {
    const center = {lat: 5.2632, lng: 100.4846};

    const {Map} = await google.maps.importLibrary("maps");
    var map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 10,
        styles: [{
            featureType: 'poi',
            stylers: [{visibility: 'off'}]
        }, {
            featureType: 'transit.station',
            stylers: [{visibility: 'off'}]
        }],
        disableDoubleClickZoom: true,
    })
}

initMap();