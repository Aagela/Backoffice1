<script>
/**
 * Google-map component
 */
export default {
 data() {
    return {
      title: "Google Maps",
       items: [{
                    text: "Maps",
                    href: "/",
                },
                {
                    text: "EV Stations Map",
                    active: true,
                },
            ],
            }
        }
       
  
   }
  //     mapboxgl: null,
  //     map: null,
  //     geolocate: null,
  //     locations: {
  //         type: 'FeatureCollection',
  //         features: [
  //           {
  //             type: 'Feature',
  //             properties: {
  //               description:
  //                 '<strong>Make it Mount Pleasant</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
  //               icon: 'cid-ev-station',
  //             },
  //             geometry: {
  //               type: 'Point',
  //               coordinates: [-1.5553459789290747, 53.8074359575167],
  //             },
  //           },
  //           {
  //             type: 'Feature',
  //             properties: {
  //               description:
  //                 '<strong>Mad Men Season Five Finale Watch Party</strong><p>Head to Lounge 201 (201 Massachusetts Avenue NE) Sunday for a <a href="http://madmens5finale.eventbrite.com/" target="_blank" title="Opens in a new window">Mad Men Season Five Finale Watch Party</a>, complete with 60s costume contest, Mad Men trivia, and retro food and drink. 8:00-11:00 p.m. $10 general admission, $20 admission and two hour open bar.</p>',
  //               icon: 'cid-ev-station',
  //             },
  //             geometry: {
  //               type: 'Point',
  //               coordinates: [53.64211222348344, -1.7801204568227615],
  //             },
  //           },
  //           {
  //             type: 'Feature',
  //             properties: {
  //               description:
  //                 '<strong>Big Backyard Beach Bash and Wine Fest</strong><p>EatBar (2761 Washington Boulevard Arlington VA) is throwing a <a href="http://tallulaeatbar.ticketleap.com/2012beachblanket/" target="_blank" title="Opens in a new window">Big Backyard Beach Bash and Wine Fest</a> on Saturday, serving up conch fritters, fish tacos and crab sliders, and Red Apron hot dogs. 12:00-3:00 p.m. $25.grill hot dogs.</p>',
  //               icon: 'bar-15',
  //             },
  //             geometry: {
  //               type: 'Point',
  //               coordinates: [-77.090372, 38.881189],
  //             },
  //           },
  //           {
  //             type: 'Feature',
  //             properties: {
  //               description:
  //                 '<strong>Ballston Arts & Crafts Market</strong><p>The <a href="http://ballstonarts-craftsmarket.blogspot.com/" target="_blank" title="Opens in a new window">Ballston Arts & Crafts Market</a> sets up shop next to the Ballston metro this Saturday for the first of five dates this summer. Nearly 35 artists and crafters will be on hand selling their wares. 10:00-4:00 p.m.</p>',
  //               icon: 'art-gallery-15',
  //             },
  //             geometry: {
  //               type: 'Point',
  //               coordinates: [-1.7801204568227615, 53.64211222348344],
  //             },
  //           },
  //         ],
  //       },
  //     // locations for the EV stations
  //     // locations1: [
  //     //   {
  //     //     name: 'University of Huddersfield',
  //     //     longlat: [-1.7801204568227615, 53.64211222348344]
  //     //   },
  //     //   {
  //     //     name: 'University of Leeds',
  //     //     longlat: [-1.5553459789290747, 53.8074359575167]
  //     //   },
  //     // ]
  //   }

  // },
  
  // async beforeMount() {
  //    this.mapboxgl = require('mapbox-gl')
  //    await this.getstations()
  //    this.initMap()
  // },
  // mounted() {
  //   const  mapboxgl = require('mapbox-gl')
  // },
  //  methods: {
  //   async getstations(){
  //          const  data = await this.$supabase.from('ChargingStation').select("*");
  //           if(data.error){
  //             console.log("no data");
  //             return 0
  //           }
  //           this.locations =  data.data
            
  //   },
  //    myFunction (message, event) {
  //   // now we have access to the native event
  //   if (event) {
  //     event.preventDefault()
  //     return message
  //   }
  //   alert(message)
  //    return message
  // },
  //   initMap() {
  //     this.mapboxgl.accessToken = 'pk.eyJ1Ijoic2V2aHViIiwiYSI6ImNrdHI2bnUwbzBsd20ydXFvamxxa3hwcG0ifQ.PbkD3oEuXz-TTGH5NkGL6A'
  //     this.map = new this.mapboxgl.Map({
  //       container: 'mapbox',
  //       style: 'mapbox://styles/sevhub/ckv72pdsh879c14pi05ngz2lc',
  //       zoom: 12,
  //       center: [-1.7801204568227615, 53.64211222348344],
  //     })
  //     this.locations.forEach(feature =>{
  //       const el = document.createElement('div');
  //       el.className = 'marker';
  //       new this.mapboxgl.Marker(el)
  //         .setLngLat([feature.address.longitude, feature.address.latitude])
  //         .setPopup(
  //           new this.mapboxgl.Popup({ offset: 25 }) // add popups
  //             .setHTML(
  //               `<div class="infowindow-listItem">
  //               <h3 class="infowindow-subtitle">${feature.name}</h3>
  //               <h4 class="infowindow-title">${feature.status}</h4>
  //               <h3 >${feature.name}</h3><p>${feature.updated_at}</p>
  //               <button id="b1" class="button button1" onclick="location.href = 'posts?id=${feature.id}'" type="button">Charge</button></div>`
  //             )
  //         )
  //         .addTo(this.map);
  //     })
     
  //     this.map.addControl(
  //       new this.mapboxgl.GeolocateControl({
  //       positionOptions: {
  //       enableHighAccuracy: true
  //       },
  //       // When active the map will receive updates to the device's location as it changes.
  //       trackUserLocation: true,
  //       // Draw an arrow next to the location dot to indicate which direction the device is heading.
  //       showUserHeading: true
  //       })
  //     );
  //   },
    
  // },
  
// }
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
     <!-- <div class="row">
        
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Basic</h4>
                    <p class="card-title-dsec">Example of google maps.</p>
                   
                    <div id="mapbox"></div>
                
            </div>
        </div>
       
        </div> -->
        <div class="row">
        <div class="col-lg">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Map type</h4>
                    <p class="card-title-dsec">EV Stations maps.</p>
                    <!-- Set map type -->
                    <gmap-map :center="{ lat: 4, lng: 4 }" :zoom="3" style="height: 500px" map-type-id="terrain"></gmap-map>
                </div>
            </div>
        </div>
    </div>
    </div>
    

    
  </div>
 </div>
</template>
<style>
/* .mapboxgl-map,
.mapboxgl-canvas-container,
.mapboxgl-map canvas {
  height: 100% !important;
}
/* body { margin: 0; padding: 0; }
#map { position: absolute; top: 0; bottom: 0; width: 100%; } */
/* 
.marker {
  background-image: url('https://i.imgur.com/3gKrpsU.png');
  background-size: cover;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
}
.mapboxgl-popup {
  max-width: 200px;
}
.mapboxgl-popup-content {
  text-align: center;
  font-family: 'Open Sans', sans-serif;
}
.button {
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.infowindow-listItem{
   background: linear-gradient(to right, #2bc0e4, #eaecc6);
 
} */ 

/* .button1 {background-color: #4CAF50;} Green */
</style>