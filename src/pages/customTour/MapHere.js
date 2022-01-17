import React from 'react';
import H from "@here/maps-api-for-javascript";
import  image from "../../assets/restaurant.jpeg"


//import onResize from 'simple-element-resize-detector';

export default class Map extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      text: "START THE TOUR"
    };

    
    
   
  
    this.places=this.props.places();
    //console.log(this.places)
    // the reference to the container
    this.ref = React.createRef();
    this.count = this.state.count;
    // reference to the map
    this.map = null;
  }

  componentDidMount() {
  if (!this.map) {
    clearTimeout(this.timer);
    // Functions
    
    
 const b64 = new Buffer(this.places[1].image || ' ').toString('base64')
 const mimeType = 'image/jpg'
    var photos = [
      
      {
      "url": `data:${mimeType};base64,${new Buffer(this.places[1].image || ' ').toString('base64')}`,
      "thumbnail": "//upload.wikimedia.org/wikipedia/commons/thumb/b/bd/12-07-12-wikimania-wdc-by-RalfR-010.jpg/120px-12-07-12-wikimania-wdc-by-RalfR-010.jpg",
      "width": 120,
      "height": 78,
      "title": "Akchour Waterfalls",
      "author": "Ralf Roletschek",
      "index": 'Station 1',
      "license": null,
      "latitude": 35.249969691156664, 
      "longitude":-5.1811936277461985 ,
      "pageid": "20260531",
      "fullurl": "//upload.wikimedia.org/wikipedia/commons/thumb/b/bd/12-07-12-wikimania-wdc-by-RalfR-010.jpg/300px-12-07-12-wikimania-wdc-by-RalfR-010.jpg"
      },
      {
      "url": `data:${mimeType};base64,${new Buffer(this.places[3].image || ' ').toString('base64')}`,
      "thumbnail": "//upload.wikimedia.org/wikipedia/commons/thumb/4/4c/2012-07-22_15-37-00-fort-giromagny.jpg/120px-2012-07-22_15-37-00-fort-giromagny.jpg",
      "width": 120,
      "height": 118,
      "title": "Assaada",
      "index": 'Station 2',
      "license": null,
      "latitude": 35.169295674033414,
      "longitude": -5.264786246031348,
      "pageid": "20384058",
      "fullurl": "//upload.wikimedia.org/wikipedia/commons/thumb/4/4c/2012-07-22_15-37-00-fort-giromagny.jpg/300px-2012-07-22_15-37-00-fort-giromagny.jpg",
      "author": "ComputerHotline"
      },
      {
        "url": `data:${mimeType};base64,${new Buffer(this.places[0].image || ' ').toString('base64')}`,
        "width": 120,
        "height": 120,
        "title": 'Ras El Ma Waterfalls',
        "author": "Ralf Roletschek",
        "index": 'Station 3',
        "latitude": this.places[0].coord.coordinates[1],
        "longitude": this.places[0].coord.coordinates[0],
        "pageid": "16338452",
        "fullurl": `data:${mimeType};base64,${b64}`
        },
  
      {
      "url": `data:${mimeType};base64,${new Buffer(this.places[2].image || ' ').toString('base64')}`,
      "thumbnail": "//upload.wikimedia.org/wikipedia/commons/thumb/4/4c/2012-07-22_15-37-00-fort-giromagny.jpg/120px-2012-07-22_15-37-00-fort-giromagny.jpg",
      "width": 120,
      "height": 118,
      "title": "35th Chefchaouen Andalusian Music Festival",
      "index": 'Station 4',
      "license": null,
      "latitude": 35.16919021266683, 
      "longitude": -5.261211972972729,
      "pageid": "20384058",
      "fullurl": "//upload.wikimedia.org/wikipedia/commons/thumb/4/4c/2012-07-22_15-37-00-fort-giromagny.jpg/300px-2012-07-22_15-37-00-fort-giromagny.jpg",
      "author": "ComputerHotline"
      },
      {
      "url": `data:${mimeType};base64,${new Buffer(this.places[4].image || ' ').toString('base64')}`,
      "thumbnail": "//upload.wikimedia.org/wikipedia/commons/thumb/4/4c/2012-07-22_15-37-00-fort-giromagny.jpg/120px-2012-07-22_15-37-00-fort-giromagny.jpg",
      "width": 120,
      "height": 118,
      "title": "Hotel Sandra",
      "index": 'Station 5',
      "license": null,
      "latitude": 35.17220800050215,
      "longitude": -5.2627497205960765,
      "pageid": "20384058",
      "fullurl": "//upload.wikimedia.org/wikipedia/commons/thumb/4/4c/2012-07-22_15-37-00-fort-giromagny.jpg/300px-2012-07-22_15-37-00-fort-giromagny.jpg",
      "author": "ComputerHotline"
      }];
  
    function startClustering(map, ui, getBubbleContent,data) {
      // First we need to create an array of DataPoint objects for the ClusterProvider
      var dataPoints = data.map(function(item) {
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
          noiseMarker = new H.map.Marker(noisePoint.getPosition());
          noiseMarker.setData(data);
    
        return noiseMarker;
      }
    };
    
    
    
    // Helper function for getting a random point from a cluster object
    function getRandomDataPoint(cluster) {
      var dataPoints = [];
      cluster.forEachDataPoint(dataPoints.push.bind(dataPoints));
      return dataPoints[Math.random() * dataPoints.length | 0];
    }
    
    /**
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
    

        var latBubble = position.lat +0.0001;
        var lonBubble= position.lng;
        var latCenter = latBubble +0.01;
        var lonCenter= lonBubble ;
      // For all markers create only one bubble, if not created yet
      if (!bubble) {
        bubble = new H.ui.InfoBubble({lat:latBubble,lng:lonBubble}, {
          content: bubbleContent
        });
        ui.addBubble(bubble);
        // Cache the bubble object
        onMarkerClick.bubble = bubble;
      } else {
        // Reuse existing bubble object
        bubble.setPosition({lat:latBubble,lng:lonBubble});
        bubble.setContent(bubbleContent);
        bubble.open();
      }
    
      // Move map's center to a clicked marker
      map.setCenter({lat:latCenter,lng:lonCenter}, true);
   
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
        center: {lat:35.172208, lng:-5.262750},
        zoom: 12,
      },
    );


    const setCenterFunc = () =>{
      
      map.setZoom(19)
      onMarkerOpen(photos);
      
      this.setState(() => {
        this.setState({
          count: this.state.count + 1
        },
        () => console.log(this.state.count))
      })


     if(this.state.count ==0){
        this.setState(() => {
          this.setState({
            text: "NEXT"
          },
          () => console.log(this.state.text))
        })
      }
      else if( this.state.count==photos.length-1){
        this.setState(() => {
          this.setState({
            text: "RESTART"
          },
          () => console.log(this.state.text))
        });
        this.setState(() => {
          this.setState({
            count: 0
          },
          )
        })

      }
      else if(this.state.count != 0 && this.state.count!=photos.length)
      this.setState(() => {
        this.setState({
          text: "NEXT"
        },
        () => console.log(this.state.text))
      })
      
    }

       

    const  onMarkerOpen= (data) => {
      // Get position of the "clicked" marker
    console.log(this.state.count)

      var latBubble = data[this.state.count].latitude +0.0003;
      var lonBubble= data[this.state.count].longitude;
      var latCenter = latBubble +0.0008;
      var lonCenter= lonBubble ;

      var position = {lat:latBubble, lng:lonBubble},
        // Get the data associated with that marker
        data = data[this.state.count],
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
      map.setCenter({lat:latCenter , lng:lonCenter});
      map.setZoom(16)
     
     // zoomOut();
      
    
    }

/* const zoomOut = () => {
          return setTimeout(() => map.setZoom(12), 2000);
        } */
    

    // add a resize listener to make sure that the map occupies the whole container
    window.addEventListener('resize', () => map.getViewPort().resize());
    
    
    // behavior implements default interactions for pan/zoom (also on mobile touch environments)
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    var ui = H.ui.UI.createDefault(map, layers);
   
    //addMarkersAndSetViewBounds(map);
    function getBubbleContent(data) {
      
      
     
      return [
        '<div >','<h4 className="bubble" >',data.index ,'</h4>','<h6 className="bubble" >',data.title,'</h6>',
        '<img  src=', data.url,' width="200" height="60" />','<br/>',
      '<p> lat : ',data.latitude.toFixed(6) ,'<br/>','lat : ',data.longitude.toFixed(6),'</p>' ,'<br/>',
      
      ,
        '</div>'
      ].join('');
    }
    startClustering(map, ui, getBubbleContent, photos);
   
      

    
  


    this.setCenterFunc=setCenterFunc;
   
    this.map = map;

  }
}


render() {
  return (
    <div>
    <button onClick={()=> this.setCenterFunc()} className='start-button btn btn-info' >{this.state.text} </button>
    <div
      style={{ position: 'relative', width: '100%', height:'500px' }}
      ref={this.ref}
    />
    
    
   
    </div>
    
    
  )
}
}