import React from 'react';
import H from "@here/maps-api-for-javascript";
//import  image from "../../assets/restaurant.jpeg"
import './customTour.css'
//import StarRating from '../../components/rating';
//import { Star } from '@mui/icons-material';
//import onResize from 'simple-element-resize-detector';









export default class Map extends React.Component {
  constructor(props) {

    super(props);
    // the reference to the container
    this.ref = React.createRef();
    // reference to the map
    this.map = null;
  }

  componentDidMount() {
  if (!this.map) {
   
    // Functions
  /*   console.log("places in map")
   console.log(this.props.places()) */


    var photos = [
      {
      "url": "//commons.wikimedia.org/wiki/File:11-09-fotofluege-cux-allg-25a.jpg",
      "thumbnail": "//upload.wikimedia.org/wikipedia/commons/thumb/3/3b/11-09-fotofluege-cux-allg-25a.jpg/120px-11-09-fotofluege-cux-allg-25a.jpg",
      "width": 120,
      "height": 120,
      "title": "File:11-09-fotofluege-cux-allg-25a.jpg",
      "author": "Ralf Roletschek",
      "license": null,
      "latitude": 35.16866735964295,
      "longitude": -5.270122706797885,
      "pageid": "16338452",
      "fullurl": "//upload.wikimedia.org/wikipedia/commons/thumb/3/3b/11-09-fotofluege-cux-allg-25a.jpg/300px-11-09-fotofluege-cux-allg-25a.jpg"
      },
      {
      "url": "//commons.wikimedia.org/wiki/File:12-07-12-wikimania-wdc-by-RalfR-010.jpg",
      "thumbnail": "//upload.wikimedia.org/wikipedia/commons/thumb/b/bd/12-07-12-wikimania-wdc-by-RalfR-010.jpg/120px-12-07-12-wikimania-wdc-by-RalfR-010.jpg",
      "width": 120,
      "height": 78,
      "title": "File:12-07-12-wikimania-wdc-by-RalfR-010.jpg",
      "author": "Ralf Roletschek",
      "license": null,
      "latitude": 35.17561321515214,
      "longitude": -5.272010981824954,
      "pageid": "20260531",
      "fullurl": "//upload.wikimedia.org/wikipedia/commons/thumb/b/bd/12-07-12-wikimania-wdc-by-RalfR-010.jpg/300px-12-07-12-wikimania-wdc-by-RalfR-010.jpg"
      },
      {
      "url": "//commons.wikimedia.org/wiki/File:2012-07-22_15-37-00-fort-giromagny.jpg",
      "thumbnail": "//upload.wikimedia.org/wikipedia/commons/thumb/4/4c/2012-07-22_15-37-00-fort-giromagny.jpg/120px-2012-07-22_15-37-00-fort-giromagny.jpg",
      "width": 120,
      "height": 118,
      "title": "File:2012-07-22 15-37-00-fort-giromagny.jpg",
      "license": null,
      "latitude": 35.1704214195607,
      "longitude": -5.26248377600656,
      "pageid": "20384058",
      "fullurl": "//upload.wikimedia.org/wikipedia/commons/thumb/4/4c/2012-07-22_15-37-00-fort-giromagny.jpg/300px-2012-07-22_15-37-00-fort-giromagny.jpg",
      "author": "ComputerHotline"
      }];
    const data =[{latitude:35.1704214195607,longitude:-5.26248377600656,
    },{latitude:35.17561321515214,longitude:-5.272010981824954},
    {latitude:35.16866735964295,longitude:-5.270122706797885}]

    function startClustering(map, ui, getBubbleContent, data) {
      // First we need to create an array of DataPoint objects for the ClusterProvider
      var dataPoints = data.map(function(item) {
        // Note that we pass "null" as value for the "altitude"
        // Last argument is a reference to the original data to associate with our DataPoint
        // We will need it later on when handling events on the clusters/noise points for showing
        // details of that point
        return new H.clustering.DataPoint(item.latitude, item.longitude, null, item);
      });
    
      // Create a clustering provider with a custom theme
      var clusteredDataProvider = new H.clustering.Provider(dataPoints, {
        clusteringOptions: {
          // Maximum radius of the neighborhood
          eps: 64,
          // minimum weight of points required to form a cluster
          minWeight: 3
        },
        theme: CUSTOM_THEME
      });
      // Note that we attach the event listener to the cluster provider, and not to
      // the individual markers
      clusteredDataProvider.addEventListener('tap', onMarkerClick);
    
      // Create a layer that will consume objects from our clustering provider
      var layer = new H.map.layer.ObjectLayer(clusteredDataProvider);
    
      // To make objects from clustering provider visible,
      // we need to add our layer to the map
      map.addLayer(layer);
    }
    
    // Custom clustering theme description object.
    // Object should implement H.clustering.ITheme interface
    var CUSTOM_THEME = {
      getClusterPresentation: function(cluster) {
        // Get random DataPoint from our cluster
        var randomDataPoint = getRandomDataPoint(cluster),
          // Get a reference to data object that DataPoint holds
          data = randomDataPoint.getData();
    
        // Create a marker from a random point in the cluster
        var clusterMarker = new H.map.Marker(cluster.getPosition());

        // Create a marker with pic
      /*   var clusterMarker = new H.map.Marker(cluster.getPosition(), {
          icon: new H.map.Icon(data.thumbnail, {
            size: {w: 50, h: 50},
            anchor: {x: 25, y: 25}
          }),
    
          // Set min/max zoom with values from the cluster,
          // otherwise clusters will be shown at all zoom levels:
          min: cluster.getMinZoom(),
          max: cluster.getMaxZoom()
        }); */
    
        // Link data from the random point from the cluster to the marker,
        // to make it accessible inside onMarkerClick
        clusterMarker.setData(data);
    
        return clusterMarker;
      },
      getNoisePresentation: function (noisePoint) {
        // Get a reference to data object our noise points
        var data = noisePoint.getData(),
          // Create a marker for the noisePoint
          noiseMarker = new H.map.Marker(noisePoint.getPosition());
          //var madridMarker = new H.map.Marker(coords);
    
        // Link a data from the point to the marker
        // to make it accessible inside onMarkerClick
        noiseMarker.setData(data);
    
        return noiseMarker;
      }
    };
    
    
    /**
     * Boilerplate map initialization code starts below:
     */
    // Helper function for getting a random point from a cluster object
    function getRandomDataPoint(cluster) {
      var dataPoints = [];
    
      // Iterate through all points which fall into the cluster and store references to them
      cluster.forEachDataPoint(dataPoints.push.bind(dataPoints));
    
      // Randomly pick an index from [0, dataPoints.length) range
      // Note how we use bitwise OR ("|") operator for that instead of Math.floor
      return dataPoints[Math.random() * dataPoints.length | 0];
    }
    
    /**
     * CLICK/TAP event handler for our markers. That marker can represent either a single photo or
     * a cluster (group of photos)
     * @param {H.mapevents.Event} e The event object
     */
    function onMarkerClick(e) {
      // Get position of the "clicked" marker
      var position = e.target.getGeometry(),
        // Get the data associated with that marker
        data = e.target.getData(),
        // Merge default template with the data and get HTML
        bubbleContent = getBubbleContent(data),
        bubble = onMarkerClick.bubble;
    
      // For all markers create only one bubble, if not created yet
      if (!bubble) {
        bubble = new H.ui.InfoBubble(position, {
          content: bubbleContent
        });
        ui.addBubble(bubble);
        // Cache the bubble object
        onMarkerClick.bubble = bubble;
      } else {
        // Reuse existing bubble object
        bubble.setPosition(position);
        bubble.setContent(bubbleContent);
        bubble.open();
      }
    
      // Move map's center to a clicked marker
      map.setCenter(position, true);
    }







  /*  function addMarkersAndSetViewBounds() {
      // create map objects
      var place1 = new H.map.Marker({lat:35.1704214195607 ,  lng:-5.26248377600656}),
          place2 = new H.map.Marker({lat:35.17561321515214, lng:-5.272010981824954}),
          place3 = new H.map.Marker({lat:35.16866735964295, lng:-5.270122706797885}), 
          group = new H.map.Group();
    
      // add markers to the group
      group.addObjects([place1,place2, place3]);
      map.addObject(group);
    
      // get geo bounding box for the group and set it to the map
      map.getViewModel().setLookAtData({
        bounds: group.getBoundingBox()
      });
    }  */

    const platform = new H.service.Platform({
      apikey: 'xnlzYffs28Ulilc8LNLHFCDU_8tgSd_I8dw7GKo2mtA'
    });
    const layers = platform.createDefaultLayers();
    
    // initialize a map
    const map = new H.Map(

      this.ref.current,
      layers.vector.normal.map,
      {
        pixelRatio: window.devicePixelRatio,
        center: {lat:35.16820, lng:-5.2695429},
        zoom: 14,
      },
    );
    // add a resize listener to make sure that the map occupies the whole container
    window.addEventListener('resize', () => map.getViewPort().resize());
    
    
    // behavior implements default interactions for pan/zoom (also on mobile touch environments)
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    var ui = H.ui.UI.createDefault(map, layers);
   /*  var mapSettings = ui.getControl('mapsettings');
    var zoom = ui.getControl('zoom');
    var scalebar = ui.getControl('scalebar'); */

    // Add info bubble to the UI:
      /* var bubble = new H.ui.InfoBubble({ lat:35.168202128112526, lng:-5.269542968447736 }, {
        content: '<b>Hello World!</b>'
     });

      ui.addBubble(bubble); */
    

    // Define a variable holding SVG mark-up that defines an icon image:
    /* var svgMarkup = '<svg width="24" height="24" ' +
        'xmlns="http://www.w3.org/2000/svg">' +
        '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
        'height="22" /><text x="12" y="18" font-size="12pt" ' +
        'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
        'fill="white"></text></svg>';

    // Create an icon, an object holding the latitude and longitude, and a marker:
    var icon = new H.map.Icon(svgMarkup),
        coords = {lat:35.168202128112526, lng:-5.269542968447736},
        marker = new H.map.Marker(coords, {icon: icon});

    // Add the marker to the map and center the map at the location of the marker:
    map.addObject(marker);
    */
    /* var coords = {lat:35.168202128112526, lng:-5.269542968447736}
    var madridMarker = new H.map.Marker(coords);
    map.addObject(madridMarker);
    map.setCenter(coords); */
    //addMarkersAndSetViewBounds(map);
    function getBubbleContent(data) {
      return [
        '<div >','<h6 className="bubble" >Restaurant</h6>',
        '<img  src="/static/media/restaurant.b8dd6470.jpeg" width="100" height="60" />','<br/>',
      '<p> lat : ',data.latitude.toFixed(6) ,'<br/>','lat : ',data.longitude.toFixed(6),'</p>' ,

      ,
        '</div>'
      ].join('');
    }
    
    // Step 5: request data that will be visualized on a map

    startClustering(map, ui, getBubbleContent, photos);
  
    this.map = map;

  }
}


render() {
  return (
    <div>
    <div
      style={{ position: 'relative', width: '100%', height:'500px' }}
      ref={this.ref}
    />
    
    
   
    </div>
    
    
  )
}
}