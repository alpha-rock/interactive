import React, {Component, Fragment} from 'react';
import {render} from 'react-dom';
import {StaticMap} from 'react-map-gl';
import DeckGL from '@deck.gl/react';
import {TextLayer,ScatterplotLayer} from '@deck.gl/layers';
import {DataFilterExtension} from '@deck.gl/extensions';



import RangeInput from './range-input';

// Set your mapbox token here
const MAPBOX_TOKEN = '1' /*"pk.eyJ1IjoiYWxwaGEtc2lzb2RpeWEiLCJhIjoiY2p6MmppOXM2MDcwaDNtbDlmeDU2ZDR1biJ9.AMeqwiRdGPHuNjsIC1cJ8w"*/;
process.env.MapboxAccessToken; // eslint-disable-line
const MAPBOX_STYLE = 'mapbox://styles/alpha-sisodiya/cjzh2rw962odm1cqx34m2s0ix';
// Source data GeoJSON
const DATA_URL = 'https://raw.githubusercontent.com/alpha-rock/interactive/master/Data.json'; // eslint-disable-line

const INITIAL_VIEW_STATE = {
  latitude: 18.7,
  longitude: 78.9,
  zoom: 4.5,
  pitch: 45,
  bearing: -30,
  maxZoom: 15,
  minZoom: 3,
};
var temp;


const MS_PER_DAY = 8.64e7; // milliseconds in a day

const dataFilter = new DataFilterExtension({filterSize: 1});

export class App extends Component {
  constructor(props) {
    super(props);

    const timeRange = this._getTimeRange(props.data);

    this.state = {
      timeRange,
      filterValue: timeRange,
      hoveredObject: null
    };
    this._onHover = this._onHover.bind(this);
    this._renderTooltip = this._renderTooltip.bind(this);
    
  }
  _renderLayers() {
    const {data,fontSize = 32} = this.props;
    
    const {filterValue} = this.state;
    
    const layers =[
      data&&
      new ScatterplotLayer({
        id: 'earthquakes',
        data:DATA_URL,
        opacity: 0.8,
        radiusScale: 100,
        radiusMinPixels: 1,
        wrapLongitude: true,
        
        getPosition: d => [d.Long, d.Lat, -d.PROGRAM_GENERATION],
        getRadius: d => d.PROGRAM_GENERATION/3,
        getFillColor: d => {
          const r = d.PROGRAM_GENERATION/10;
          return [255 - r , r , r ];
        },

       getFilterValue: d => (new Date(`${d.Month_yr} UTC`).getTime() / MS_PER_DAY), // in days
        filterRange: [filterValue[0], filterValue[1]],
        filterSoftRange: [
          filterValue[0] * 0.9 + filterValue[1] * 0.1,
          filterValue[0] * 0.1 + filterValue[1] * 0.9
        ],
        filterTransformColor: true,
        extensions: [dataFilter],

        pickable: true,
        onHover: this._onHover
      }) ,data && new TextLayer({
        id: 'twitter-topics-raw',
        data:DATA_URL,
        billboard:true,
        getText: d => d.STATION,
        getPosition: d => [d.Long, d.Lat, 20000],
        getColor: d => [29, 145, 192],
        getSize: d => 20,
        sizeScale: fontSize / 20,
        getFilterValue: d => [(new Date(`${d.Month_yr} UTC`).getTime() / MS_PER_DAY),d.PROGRAM_GENERATION], // in days

        filterRange: [[filterValue[0], filterValue[1]],[1500,8000]],
        extensions: [new DataFilterExtension({filterSize: 2})],
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
      this.setState({timeRange, filterValue: timeRange});
    }
  }

  _getTimeRange(data) {
    if (!data) {
      return null;
    }
    return data.reduce(
      (range, d) => {
        const t = (new Date(`${d.Month_yr} UTC`).getTime()) / MS_PER_DAY;
       
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
            <b>Time: </b>
            <span>{new Date(hoveredObject.timestamp).toUTCString()}</span>
          </div>
          <div>
            <b>Power Consumed: </b>
            <span>{hoveredObject.Pcons}ACTUAL_GENERATION</span>
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
    const {mapStyle ='mapbox://styles/alpha-sisodiya/cjzh2rw962odm1cqx34m2s0ix'  /*'mapbox://styles/mapbox/light-v9'*/} = this.props;
    const {timeRange, filterValue} = this.state;
    


    return (
      <Fragment>
        <DeckGL
          layers={this._renderLayers()}
          initialViewState={INITIAL_VIEW_STATE}
          controller={true}
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
            formatLabel={this._formatLabel}
            onChange={({value}) => this.setState({filterValue: value})}
          />
        )}
      </Fragment>
    );
  }
}

export function renderToDOM(container) {
  render(<App />, container);
  require('d3-request').json(DATA_URL, (error, response) => {
    if (!error) {
      const data =JSON.parse(response);
     // const data = response;
      temp=data;
     // console.log(data);
     console.log(data.Long);
      render(<App data={data} />, container);
      
    }
    else{
      console.log('failed to convert data');
    }
  });
}

// export function renderToDOM(container) {
//   render(<App />, container);
//   require('d3-request').csv(DATA_URL, (error, response) => {
//     if (!error) {
//       const data = response.map(row => ({
//         timestamp: new Date(`${row.Month_yr} UTC`).getTime(),
//         latitude: Number(row.Lat),
//         longitude: Number(row.Long),
//         Pgen: Number(row.PROGRAM_GENERATION),
//         Pcons: Number(row.ACTUAL_GENERATION),
//         name: String(row.STATION)
//       }));
//       temp=data;
//       render(<App data={data} />, container);
//     }
//     else{
//       console.log('failed to convert data');
//     }
//   });
// }









import React, {Component, Fragment} from 'react';
import {render} from 'react-dom';
import {StaticMap} from 'react-map-gl';
import DeckGL from '@deck.gl/react';
import {TextLayer,ScatterplotLayer} from '@deck.gl/layers';
import {DataFilterExtension} from '@deck.gl/extensions';



import RangeInput from './range-input';

// Set your mapbox token here
const MAPBOX_TOKEN = '1'/*"pk.eyJ1IjoiYWxwaGEtc2lzb2RpeWEiLCJhIjoiY2p6MmppOXM2MDcwaDNtbDlmeDU2ZDR1biJ9.AMeqwiRdGPHuNjsIC1cJ8w";*/
process.env.MapboxAccessToken; // eslint-disable-line
const MAPBOX_STYLE = 'mapbox://styles/alpha-sisodiya/cjzh2rw962odm1cqx34m2s0ix';
// Source data GeoJSON
const DATA_URL = 'https://raw.githubusercontent.com/alpha-rock/interactive/master/Data.json'; // eslint-disable-line

const INITIAL_VIEW_STATE = {
  latitude: 18.7,
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
      hoveredObject: null
    };
    this._onHover = this._onHover.bind(this);
    this._renderTooltip = this._renderTooltip.bind(this);
  }
  _renderLayers() {
    
    const {data,fontSize = 32} = this.props;
    const {filterValue} = this.state;
    var l=0;
    const layers =[
      data&&
      new ScatterplotLayer({
        id: 'earthquakes',
        data,
        opacity: 0.8,
        radiusScale: 100,
        radiusMinPixels: 1,
        wrapLongitude: true,

        getPosition: d => [d.longitude, d.latitude, -d.Pgen],
        getRadius: d => d.Pcons/3 ,
        getFillColor: d => {
          const r = Math.sqrt(Math.max(d.Pgen, 0));
          return [255 - r , r , r ];
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
      }) ,data && new TextLayer({
        id: 'twitter-topics-raw',
        data,
        billboard:true,
        getText: d => d.name ,
        getPosition: d => [d.longitude, d.latitude,[ temp=Math.max(d.Pcons,temp)]],
        getColor: [29, 145, 250],
        getSize: d => 20,        
        sizeScale: fontSize / 20,
        getFilterValue: d => [d.timestamp / MS_PER_DAY,d.Pcons], // in days

        filterRange: [[filterValue[0], filterValue[1]],[temp,8000]],
        extensions: [new DataFilterExtension({filterSize: 2})],
        

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
      this.setState({timeRange, filterValue: timeRange});
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
            <b>Time: </b>
            <span>{new Date(hoveredObject.timestamp).toUTCString()}</span>
          </div>
          <div>
            <b>Power Consumed: </b>
            <span>{hoveredObject.Pcons}ACTUAL_GENERATION</span>
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
    const {mapStyle ='mapbox://styles/alpha-sisodiya/cjzh2rw962odm1cqx34m2s0ix'  /*'mapbox://styles/mapbox/light-v9'*/} = this.props;
    const {timeRange, filterValue} = this.state;
    

    return (
      <Fragment>
        <DeckGL
          layers={this._renderLayers()}
         
          initialViewState={INITIAL_VIEW_STATE}
          controller={true}
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
            formatLabel={this._formatLabel}
            onChange={({value}) => this.setState({filterValue: value})}
          />
        )}
      </Fragment>
    );
  }
}

export function renderToDOM(container) {
  render(<App />, container);
  require('d3-request').json(DATA_URL, (error, response) => {
    if (!error) {
      
      const data = response.map(row => ({
        timestamp: new Date(`${row.Month_yr} UTC`).getTime(),
        latitude: Number(row.Lat),
        longitude: Number(row.Long),
        Pgen: Number(row.PROGRAM_GENERATION),
        Pcons: Number(row.ACTUAL_GENERATION),
        name: String(row.STATION)
      }));
     // console.log(data);
    // temp= console.log(data);
   //  console.log(data[0].Pcons);
      
      render(<App data={data} />, container);
    }
  });
}



