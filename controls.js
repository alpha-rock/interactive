import React, {PureComponent} from 'react';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';
import {Select} from 'baseui/select';
import {Block} from 'baseui/block';
import {FormControl} from 'baseui/form-control';
import {Slider} from 'baseui/slider';
import {Client as Styletron} from 'styletron-engine-atomic';

const engine = new Styletron();
const cities = [
  {value: 'cincinnati', label: 'Cincinnati'},
  {value: 'london', label: 'London'},
  {value: 'nairobi', label: 'Nairobi'},
  {value: 'new-york', label: 'New York'},
  {value: 'san-francisco', label: 'San Francisco'},
  {value: 'seattle', label: 'Seattle'}
];

const mapTypes = [
  {value: 0, label: 'Base Map'},
  {value: 1, label: 'Node Distance'},
  {value: 2, label: 'Average Speed'},
  {value: 3, label: 'Isochronic Map'}
]

const Controls = ({
  city,
  mapType,
  setMapType,
  hour,
  setHour,
  setCity
}) => (
  <Block className='controls2' style={{
    position: 'fixed',
    top: 20,
    left: 20,
    padding: 20,
    width: '200px',
    backgroundColor: 'white',
    border: `1px solid #eee`,
  }}>
    <FormControl label="City">
    <Select value={[cities.find(d => d.value === city)]}
      clearable={false}
      options={cities}
      labelKey="label"
      valueKey="value"
      onChange={({value}) => {
        setCity(value[0].value);
      }}
    />
     </FormControl>
     <FormControl label="Map Type">
    <Select value={[mapTypes.find(d => d.value === mapType)]}
      clearable={false}
      options={mapTypes}
      labelKey="label"
      valueKey="value"
      onChange={({value}) => {
        setMapType(value[0].value);
      }}
    />
    </FormControl>
    
    {/* <FormControl label="Hour">
      <Slider
        min={0}
        max={23}
        step={1}
        value={[hour]}
        onChange={({value}) => setHour(Number(value))}
      />
    </FormControl> */}
  </Block>
);



export default class Controls1 extends PureComponent {
    constructor(props) {
      super(props);
  
      this.state = {
        isPlaying: false
      };
  
     
      
    }
  
    render() {
      const {value, min, max,data} = this.props;
     
  
      return (
        <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
        <div style={{display: 'flex', height: '100vh'}}>
          <div style={{width: '280px', height: '100vh'}}>
          <Controls
          city={data.city}
          mapType={data.mapType}
         // setMapType={setMapType}
          hour={data.hour}
          //setHour={setHour}
         // setCity={setCity}
          />
          </div>
          
          </div>
        </BaseProvider>
      </StyletronProvider> 
      );
    }
  }