import React from 'react';
import H from "@here/maps-api-for-javascript";
import  image from "../../assets/restaurant.jpeg"
import './customTour.css'
import StarRating from '../../components/rating';
import { Star } from '@mui/icons-material';
//import onResize from 'simple-element-resize-detector';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
  
    this.places=this.props.places();
    // the reference to the container
    this.ref = React.createRef();
    // reference to the map
    this.map = null;
  }

  componentDidMount() {
  if (!this.map) {
   
    // Functions
    var name = this.places[1].name
 console.log(name)
    
 const b64 = new Buffer(this.places[1].image || ' ').toString('base64')
 const mimeType = 'image/jpg'
    var photos = [
      {
      "url": `data:${mimeType};base64,${b64}`,
      "thumbnail": `data:${mimeType};base64,${b64}`,
      "width": 120,
      "height": 120,
      "title": `data:${mimeType};base64,${b64}`,
      "author": "Ralf Roletschek",
      "license": null,
      "latitude": this.places[1].coord.coordinates[1],
      "longitude": this.places[1].coord.coordinates[0],
      "pageid": "16338452",
      "fullurl": `data:${mimeType};base64,${b64}`
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
    const data =[{latitude:this.places[1].coord.coordinates[1],longitude:this.places[1].coord.coordinates[0]
    }]

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
   
    //addMarkersAndSetViewBounds(map);
    function getBubbleContent(data) {
      console.log("hi mother fucker")
      
     
      return [
        '<div >','<h4 className="bubble" >','station 1' ,'</h4>','<h6 className="bubble" >',name ,'</h6>',
        '<img  src="/static/media/restaurant.b8dd6470.jpeg" width="200" height="160" />','<br/>',
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