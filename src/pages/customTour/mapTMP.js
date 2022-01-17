  // Step 5: request data that will be visualized on a map

    /* 

      // departure point (origin)
    var start = '37.343031547893695,-5.8485221153437825';

    // collection of waypoints
    var waypoints = [
      '35.17561321515214,-5.8485221153437825',
      '35.16866735964295,-5.270122706797885'
    ];

    // end point (destination)
    var end = '35.169295674033414,-5.264786246031348'

    // routing parameters
    var routingParameters = {
      'origin': start,
      'destination': end,
      'via': new H.service.Url.MultiValueQueryParameter( waypoints ),
      'routingMode': 'fast',
      'transportMode': 'car',

      'return': 'polyline'
    };

    // Get an instance of the routing service version 8:
    var router = platform.getRoutingService(null, 8);
    var onResult = function(result) {
      // ensure that at least one route was found
      if (result.routes.length) {
        result.routes[0].sections.forEach((section) => {
             // Create a linestring to use as a point source for the route line
            let linestring = H.geo.LineString.fromFlexiblePolyline(section.polyline);
    
            // Create a polyline to display the route:
            let routeLine = new H.map.Polyline(linestring, {
              style: { strokeColor: 'blue', lineWidth: 3 }
            });
    
            
    
            // Add the route polyline and the two markers to the map:
            map.addObjects([routeLine]);
    
            // Set the map's viewport to make the whole route visible:
            map.getViewModel().setLookAtData({bounds: routeLine.getBoundingBox()});
        });
      }
    };

    // Call `calculateRoute` with the routing parameters,
    // the success callback and an error callback function
    // The implementation of the two callback functions is left out for brevity
    // see documentation link below for callback examples
    router.calculateRoute(routingParameters, onResult,  function(error) {
      alert(error.message);
    })

 */

  



// function calculateRouteFromAtoB (platform) {
//   var router = platform.getPublicTransitService(),
//       routeRequestParams = {
//         origin: '52.5208,13.4093', // Fernsehturm
//         destination: '52.5034,13.3280',  // Kurfürstendamm
//         return: 'polyline,actions,travelSummary'
//       };


//   router.getRoutes(
//     routeRequestParams,
//     onSuccess,
//     onError
//   );
// }
// /**
//  * This function will be called once the Routing REST API provides a response
//  * @param  {Object} result          A JSONP object representing the calculated route
//  *
//  * see: http://developer.here.com/rest-apis/documentation/routing/topics/resource-type-calculate-route.html
//  */
// function onSuccess(result) {
//   var route = result.routes[0];

//  /*
//   * The styling of the route response on the map is entirely under the developer's control.
//   * A representitive styling can be found the full JS + HTML code of this example
//   * in the functions below:
//   */
//   addRouteShapeToMap(route);
//   addManueversToMap(route);
//   addManueversToPanel(route);
//   addSummaryToPanel(route);
//   // ... etc.
// }

// /**
//  * This function will be called if a communication error occurs during the JSON-P request
//  * @param  {Object} error  The error message received.
//  */
// function onError(error) {
//   alert('Can\'t reach the remote server');
// }


// var bubble;

// /**
//  * Opens/Closes a infobubble
//  * @param  {H.geo.Point} position     The location on the map.
//  * @param  {String} text              The contents of the infobubble.
//  */
// function openBubble(position, text){
//  if(!bubble){
//     bubble =  new H.ui.InfoBubble(
//       position,
//       // The FO property holds the province name.
//       {content: text});
//     ui.addBubble(bubble);
//   } else {
//     bubble.setPosition(position);
//     bubble.setContent(text);
//     bubble.open();
//   }
// }


// function addRouteShapeToMap(route){
//   var group = new H.map.Group();

//   route.sections.forEach(function(section) {
//     group.addObject(
//       new H.map.Polyline(
//         H.geo.LineString.fromFlexiblePolyline(section.polyline), {
//           style: {
//             lineWidth: 4,
//             strokeColor: 'rgba(0, 128, 255, 0.7)'
//           }
//         }
//       )
//     );
//   });

//   // Add the polyline to the map
//   map.addObject(group);
//   // And zoom to its bounding rectangle
//   map.getViewModel().setLookAtData({
//     bounds: group.getBoundingBox()
//   });
// }

// /**
//  * Creates a series of H.map.Marker points from the route and adds them to the map.
//  * @param {Object} route  A route as received from the H.service.RoutingService
//  */
// function addManueversToMap(route){
//   var svgMarkup = '<svg width="18" height="18" ' +
//     'xmlns="http://www.w3.org/2000/svg">' +
//     '<circle cx="8" cy="8" r="8" ' +
//       'fill="#1b468d" stroke="white" stroke-width="1"  />' +
//     '</svg>',
//     dotIcon = new H.map.Icon(svgMarkup, {anchor: {x:8, y:8}}),
//     group = new  H.map.Group(),
//     i;

//     route.sections.forEach((section) => {
//       let poly = H.geo.LineString.fromFlexiblePolyline(section.polyline).getLatLngAltArray();
    
//       let actions = section.actions;
//       // Add a marker for each maneuver
//       if (actions) {
//         for (i = 0;  i < actions.length; i += 1) {
//           let action = actions[i];
//           var marker =  new H.map.Marker({
//             lat: poly[action.offset * 3],
//             lng: poly[action.offset * 3 + 1]},
//             {icon: dotIcon});
//           marker.instruction = action.instruction;
//           group.addObject(marker);
//         }
//       }
//     });

//     group.addEventListener('tap', function (evt) {
//       map.setCenter(evt.target.getGeometry());
//       openBubble(
//         evt.target.getGeometry(), evt.target.instruction);
//     }, false);
  
//     // Add the maneuvers group to the map
//     map.addObject(group);
// }

// /**
//  * Creates a series of H.map.Marker points from the route and adds them to the map.
//  * @param {Object} route  A route as received from the H.service.RoutingService
//  */
// function addSummaryToPanel(route){
//   let duration = 0,
//       distance = 0;

//   route.sections.forEach((section) => {
//     distance += section.travelSummary.length;
//     duration += section.travelSummary.duration;
//   });

//   var summaryDiv = document.createElement('div'),
//    content = '';
//    content += '<b>Total distance</b>: ' + distance  + 'm. <br/>';
//    content += '<b>Travel Time</b>: ' + duration.toMMSS();


//   summaryDiv.style.fontSize = 'small';
//   summaryDiv.style.marginLeft ='5%';
//   summaryDiv.style.marginRight ='5%';
//   summaryDiv.innerHTML = content;


// }

// /**
//  * Creates a series of H.map.Marker points from the route and adds them to the map.
//  * @param {Object} route  A route as received from the H.service.RoutingService
//  */
// function addManueversToPanel(route){
//   var nodeOL = document.createElement('ol');

//   nodeOL.style.fontSize = 'small';
//   nodeOL.style.marginLeft ='5%';
//   nodeOL.style.marginRight ='5%';
//   nodeOL.className = 'directions';

//   route.sections.forEach((section) => {
//     if (section.actions) {
//       section.actions.forEach((action, idx) => {
//         var li = document.createElement('li'),
//             spanArrow = document.createElement('span'),
//             spanInstruction = document.createElement('span');

//         spanArrow.className = 'arrow ' + (action.direction || '') + action.action;
//         spanInstruction.innerHTML = section.actions[idx].instruction;
//         li.appendChild(spanArrow);
//         li.appendChild(spanInstruction);

//         nodeOL.appendChild(li);
//       });
//     }
//   });

// }


// Number.prototype.toMMSS = function () {
//   return  Math.floor(this / 60)  +' minutes '+ (this % 60)  + ' seconds.';
// }

// // Now use the map as required...
// calculateRouteFromAtoB (platform);  





