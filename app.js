import React, {Component, Fragment, useState, useEffect} from 'react';
import {render} from 'react-dom';
import {StaticMap} from 'react-map-gl';
import DeckGL from '@deck.gl/react';
import {TextLayer,ScatterplotLayer} from '@deck.gl/layers';
import {DataFilterExtension} from '@deck.gl/extensions';
import {FlyToInterpolator} from 'deck.gl';
import citySettings from "./city-settings.json";



console.log("App.js is loading");

import RangeInput from './range-input';

export function testFunction2() {
  console.log("Test");
}

// Set your mapbox token here
const MAPBOX_TOKEN ="pk.eyJ1IjoiYWxwaGEtc2lzb2RpeWEiLCJhIjoiY2p6MmppOXM2MDcwaDNtbDlmeDU2ZDR1biJ9.AMeqwiRdGPHuNjsIC1cJ8w";
process.env.MapboxAccessToken; // eslint-disable-line
const MAPBOX_STYLE = 'mapbox://styles/alpha-sisodiya/cjzh2rw962odm1cqx34m2s0ix';
// Source data GeoJSON
const DATA_URL = 'https://raw.githubusercontent.com/alpha-rock/interactive/master/Data.json'; // eslint-disable-line
const DATA_URL2 = 'https://raw.githubusercontent.com/alpha-rock/interactive/master/Data2.json'; // eslint-disable-line

const VIEW_STATE = [
  {View:"std" ,"latitude":18.7,"longitude":76.739},
  {View:"Jammu" ,"latitude":32.5417,"longitude":76.739},
  {View:"Mumbai" ,"latitude":19.437,"longitude":72.945},
  {View:"Jammu" ,"latitude":32.5417,"longitude":76.739},
  {View:"Jammu" ,"latitude":32.5417,"longitude":76.739},
  
];
const initialState = {
  graph: {},
  city: "india",
  ...citySettings["india"],
  hour: 0,
  mapType: 1,
  loaded: false
};
console.log(VIEW_STATE[0].View)
const no =0; 
const INITIAL_VIEW_STATE = {
  latitude: VIEW_STATE[no].latitude,
  longitude: 78.9,
  zoom: 4.5,
  pitch: 45,
  bearing: -30,
  maxZoom: 15,
  minZoom: 3,
};
var temp=0;






const MS_PER_DAY = 8.64e7; // milliseconds in a day

const dataFilter = new DataFilterExtension({filterSize: 1});

export class App extends Component {
  
  constructor(props) {
    super(props);

    const timeRange = this._getTimeRange(props.data);

    this.state = {
      timeRange,
      filterValue: timeRange,
      hoveredObject: null,
      bool:true,
      viewState: {
        latitude: 18.7,
        longitude: 76.739,
        zoom: 4.5,
        bearing:-30,
        pitch: 45,
        
      }
    };
    this._onHover = this._onHover.bind(this);
    this._onViewStateChange = this._onViewStateChange.bind(this);
    this._renderTooltip = this._renderTooltip.bind(this);
  }
  

  _goToNYC() {
    this.setState({
      viewState: {
        ...this.state.viewState,
        longitude: -74.1,
        latitude: 40.7,
        zoom: 14,
        pitch: 0,
        bearing: 0,
        transitionDuration: 8000,
        transitionInterpolator: new FlyToInterpolator()
      }
    });
    console.log("caleld");
  }

  _onViewStateChange({viewState}) {
    this.setState({viewState});
  }



  _renderLayers() {

 

   
    
    const {data, data2 ,fontSize= 32} = this.props;
    const {filterValue} = this.state;
    var l=0;
   // console.log(data)
   // console.log(data2)
    const layers =[
      data&&
      new ScatterplotLayer({
        id: 'earthquakes',
        data,
        opacity: .38,
        radiusScale: 100,
        radiusMinPixels: 1,
        wrapLongitude: true,
        parameters: {
          depthTest: false
        },
        getPosition: d => [d.longitude, d.latitude,d.Ptot],
        getRadius: d => d.Pcons/3 ,
        getFillColor: d => {
           if (d.type=="HYDRO") return [0,0,255];
         else if (d.type=="NUCLEAR")return [0,255,0];
          else return [255,0,0];
        },

       getFilterValue: d => d.timestamp / MS_PER_DAY, // in days
        filterRange: [filterValue[0], filterValue[1]],
        filterSoftRange: [
          filterValue[0] * 0.9 + filterValue[1] * 0.1,
          filterValue[0] * 0.1 + filterValue[1] * 0.9
        ],
        filterTransformColor: true,
        extensions: [dataFilter],

        pickable: true,
        onHover: this._onHover
      }) ,data2 && new TextLayer({
        id: 'PowerPlantName',
        data:data2,
        billboard:true,
        getText: d => d.name1 ,
        getPosition: d => [d.longitude, d.latitude,20000],//[ temp=Math.max(d.Pcons,temp)]
        getColor: [222, 222, 222],
        getSize: d => .0032*d.Ptot1,        
        sizeScale:  fontSize / 20,
        getTextAnchor: 'start',
       getAlignmentBaseline: 'top',
        getFilterValue: d => [d.Pcons1], // in days
        fontWeight: "900",
        filterRange: [2000,8000],
        extensions: [new DataFilterExtension({filterSize: 1})],
        

       /* filterSoftRange: [
          filterValue[0] * 0.9 + filterValue[1] * 0.1,
          filterValue[0] * 0.1 + filterValue[1] * 0.9
        ],*/
       // extensions: [dataFilter],
      },
      
      
      )
    ]
    
    return [
        layers
    ];
  }



  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      const timeRange = this._getTimeRange(nextProps.data);
      this.setState({timeRange, filterValue: [13970,14060]});
    }
  }

  _getTimeRange(data) {
    if (!data) {
      return null;
    }
    return data.reduce(
      (range, d) => {
        const t = d.timestamp / MS_PER_DAY;
       
        range[0] = Math.min(range[0], t);
        range[1] = Math.max(range[1], t);
        
        return range;
      },
      [Infinity, -Infinity]
    );
  }

  _onHover({x, y, object}) {
    this.setState({x, y, hoveredObject: object});
  }

 

  _renderTooltip() {
    const {x, y, hoveredObject} = this.state;
    return (
      hoveredObject && (
        <div className="tooltip" style={{top: y, left: x}}>
          <div>
            <b>Name: </b>
            <span>{hoveredObject.name}</span>
          </div>
          <div>
            <b>Time: </b>
            <span>{new Date(hoveredObject.timestamp).toUTCString()}</span>
          </div>
          <div>
            <b>Power Consumed: </b>
            <span>{hoveredObject.Pcons} MW</span>
          </div>
          <div>
            <b>Power Generated: </b>
            <span>{hoveredObject.Pgen} MW </span>
          </div>
        </div>
      )
    );
  }

  _formatLabel(t) {
    const date = new Date(t * MS_PER_DAY);
    return `${date.getUTCFullYear()}/${date.getUTCMonth() + 1}`;
  }
 

  render() {
    const setCity = city => {
      // setData(state => ({
      //   ...state,
      //   city,
      //   ...citySettings[city],
      //   loaded: false
      // }));
     this.state= {
        viewState: {
          longitude: VIEW_STATE[no].longitude,
          latitude: VIEW_STATE[no].latitude,
          zoom: 10,
          transitionInterpolator: new FlyToInterpolator(),
          transitionDuration: 5000
        }
      }
      this._goToNYC
      console.log("hjhdaghgahd")
    };
    const setHour = hour => {
      setData(state => ({...state, hour}));
    };
    const setMapType = mapType => {
      setData(state => ({...state, mapType}));
    };
    const setSourceIndex = sourceIndex => {
      setData(state => ({...state, sourceIndex}));
    };
    const setViewState = viewState => {
      setData(state => ({...state, viewState}));
    };

    const {mapStyle ='mapbox://styles/alpha-sisodiya/cjzh2rw962odm1cqx34m2s0ix'  /*'mapbox://styles/mapbox/light-v9'*/} = this.props;
    const {timeRange, filterValue, viewState} = this.state;
   
    const data = initialState;
    return (
      


      <Fragment>
        <DeckGL
          layers={this._renderLayers()}
          viewState={viewState}
          initialViewState={INITIAL_VIEW_STATE}
          controller={true}
          onViewStateChange={this._onViewStateChange}
        >
          
          <StaticMap
            reuseMaps
            mapStyle={mapStyle}
            preventStyleDiffing={true}
            mapboxApiAccessToken={MAPBOX_TOKEN}
          />

          {this._renderTooltip}
          
        </DeckGL>
        
        {timeRange && (
          <RangeInput
            min={timeRange[0]}
            max={timeRange[1]}
            value={filterValue}
          data ={data}     
            setCity={setCity}
            formatLabel={this._formatLabel}
            goToNYC={this._goToNYC}
            onChange={({value}) => this.setState({filterValue: value})}
            onBool={({bool}) => this.setState({filterValue: value})}
            o={console.log(timeRange)}
              
          />
        )}
       
      </Fragment>
    );
  }
}
var globalDataTemp;
var globalDataTemp2;
function saveTheData(data,temp2,container) {
  if(temp2==1){
    globalDataTemp = data;
  }
  else if (temp2==2){
    globalDataTemp2= data
  }
  
   
 
    if (globalDataTemp!=null && globalDataTemp2!=null){
      render(<App data={globalDataTemp} data2={globalDataTemp2} />, container);
      
    }
}
var tempdata,tempdata2;
export function renderToDOM(container) {
  render(<App />, container);
  
  var data,data2;
  require('d3-request').json(DATA_URL, (error, response) => {
    if (!error) {
      
      data = response.map(row => ({
        timestamp: new Date(`${row.Month_yr} UTC`).getTime(),
     
        latitude: Number(row.Lat),
        longitude: Number(row.Long),
        Ptot: Number(row.INST_CAP),
        Pgen: Number(row.PROGRAM_GENERATION),
        Pcons: Number(row.ACTUAL_GENERATION),
        name: String(row.STATION),
        type: String(row.CATEGORY)

      }));
     saveTheData(data,1,container);
    
     // render(<App data={data} />, container);
    }
    
    
  });
  require('d3-request').json(DATA_URL2, (error, response) => {
    if (!error) {
      
      data2 = response.map(row => ({
      
        latitude: Number(row.Latitude),
        longitude: Number(row.Longitude),
        Pgen1: Number(row.PROGRAM_GENERATION),
        Pcons1: Number(row.ACTUAL_GENERATION),
        name1: String(row.STATION),
        type1: String(row.CATEGORY),
        Ptot1: Number(row.INST_CAP),

      }));
      tempdata2=data2;
      saveTheData(data2,2,container);
     
     
   
      
     // render(<App data={data} data2={data2} />, container);
    }
    
   // render(<App data2={data2} />, container);
    
  });
  
}


