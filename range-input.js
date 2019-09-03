/* global requestAnimationFrame, cancelAnimationFrame */
import React, {PureComponent} from 'react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, styled} from 'baseui';
import {Slider} from 'baseui/slider';
import {Button, SHAPE, SIZE} from 'baseui/button';
import Start from 'baseui/icon/chevron-right';
import Stop from 'baseui/icon/delete';



import {Select} from 'baseui/select';
import {Block} from 'baseui/block';
import {FormControl} from 'baseui/form-control';



const engine = new Styletron();



const cities = [
  {value: 'jammu', label: 'Jammu'},
  {value: 'mumbai', label: 'Maharashtra'},
  {value: 'india', label: 'India'},
  
];

const mapTypes = [
  {value: 0, label: 'Electricity Consumption'},
  {value: 1, label: 'Electricity Production'},
  {value: 2, label: 'Overlay'},
  {value: 3, label: 'Weather'}
]

const Controls = ({
  city,
  mapType,
  setMapType,
  hour,
  setHour,
  setCity
}) => (
  <Block className='controls' style={{
    position: 'fixed',
    top: 20,
    left: 20,
    padding: 20,
    width: '200px',
    backgroundColor: '#080f1b',
    'border-radius':'10px' ,
    border: `1px solid rgb(1, 49, 84)`,
    color: 'white'
  }}>
    <FormControl label="Pattern">
    <Select value={[cities.find(d => d.value === city)]}
      clearable={false}
      options={cities}
      labelKey="label"
      valueKey="value"
      onChange={({value}) => {
        _goToNYC() ;
        // setCity(value[0].value);
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
    
     <FormControl label="Month/Year">
      <Slider
        min={0}
        max={1}
        step={1}
        value={[hour]}
        onChange={({value}) => setHour(Number(value))}
      />
    </FormControl> 
  </Block>
);



const Container = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1,
  bottom: '20px',
  width: '100%',
  color: 'white'
});

const ThumbValue = styled('div', {
  position: 'absolute',
  top: '-2em'
});

const TickBar = styled('div', {
  width: '880px',
  height: '24px',
  maxWidth: '80vw'
});

const ANIMATION_SPEED = 10;

export default class RangeInput extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };

    this._renderThumbValue = this._renderThumbValue.bind(this);
    this._animate = this._animate.bind(this);
    this._toggle = this._toggle.bind(this);
    this._animationFrame = null;
    
  }

  componentWillUnmount() {
    cancelAnimationFrame(this._animationFrame);
  }
  
  _toggle() {
    cancelAnimationFrame(this._animationFrame);
    const {isPlaying} = this.state;
    if (!isPlaying) {
      this._animate();
    }
    this.setState({isPlaying: !isPlaying});
  }

  _animate() {
    const {min, max, value} = this.props;
    const span = value[1] - value[0];
    let newValueMin = value[0] + ANIMATION_SPEED;
    if (newValueMin + span >= max) {
      newValueMin = min;
    }
    this.props.onChange({
      value: [newValueMin, newValueMin + span]
    });

    this._animationFrame = requestAnimationFrame(this._animate);
  }

  _renderThumbValue({$thumbIndex, $value}) {
    const value = $value[$thumbIndex];
    return <ThumbValue>{this.props.formatLabel(value)}</ThumbValue>;
  }

  render() {
    const {value, min, max, data} = this.props;
    const isButtonEnabled = value[0] > min || value[1] < max;

    return (
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
        <div style={{display: 'flex', height: '100vh'}}>
          <div style={{width: '280px', height: '100vh'}}>
          <Controls
          city={data.city}
          mapType={data.mapType}
        setMapType = {0}
          hour={data.hour}
          setHour={this.props.setHour}
         setCity={this.props.setCity}
          />
         
          </div>
          
          </div>
          <Container>
            <Button
              shape={SHAPE.round}
              size={SIZE.compact}
              disabled={!isButtonEnabled}
              onClick={this._toggle}
            >
              {this.state.isPlaying ? <Stop title="Stop" /> : <Start title="Show me Power Pattern" />}
            </Button>
            
            <Slider
              {...this.props}
              overrides={{
                ThumbValue: this._renderThumbValue,
                TickBar: () => <TickBar />
              }}
            />
          </Container>
        </BaseProvider>
      </StyletronProvider>
    );
  }
}








// /* global requestAnimationFrame, cancelAnimationFrame */
// import React, {PureComponent} from 'react';
// import {Client as Styletron} from 'styletron-engine-atomic';
// import {Provider as StyletronProvider} from 'styletron-react';
// import {LightTheme, BaseProvider, styled} from 'baseui';
// import {Slider} from 'baseui/slider';
// import {Button, SHAPE, SIZE} from 'baseui/button';
// import Start from 'baseui/icon/chevron-right';
// import Stop from 'baseui/icon/delete';

// const engine = new Styletron();

// const Container = styled('div', {
//   position: 'absolute',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   zIndex: 1,
//   bottom: '20px',
//   width: '100%'
// });

// const ThumbValue = styled('div', {
//   position: 'absolute',
//   top: '-2em'
// });

// const TickBar = styled('div', {
//   width: '880px',
//   height: '24px',
//   maxWidth: '80vw'
// });

// const ANIMATION_SPEED = 10;

// export default class RangeInput extends PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isPlaying: false
//     };

//     this._renderThumbValue = this._renderThumbValue.bind(this);
//     this._animate = this._animate.bind(this);
//     this._toggle = this._toggle.bind(this);
//     this._animationFrame = null;
    
//   }

//   componentWillUnmount() {
//     cancelAnimationFrame(this._animationFrame);
//   }
  
//   _toggle() {
//     cancelAnimationFrame(this._animationFrame);
//     const {isPlaying} = this.state;
//     if (!isPlaying) {
//       this._animate();
//     }
//     this.setState({isPlaying: !isPlaying});
//   }

//   _animate() {
//     const {min, max, value} = this.props;
//     const span = value[1] - value[0];
//     let newValueMin = value[0] + ANIMATION_SPEED;
//     if (newValueMin + span >= max) {
//       newValueMin = min;
//     }
//     this.props.onChange({
//       value: [newValueMin, newValueMin + span]
//     });

//     this._animationFrame = requestAnimationFrame(this._animate);
//   }

//   _renderThumbValue({$thumbIndex, $value}) {
//     const value = $value[$thumbIndex];
//     return <ThumbValue>{this.props.formatLabel(value)}</ThumbValue>;
//   }

//   render() {
//     const {value, min, max} = this.props;
//     const isButtonEnabled = value[0] > min || value[1] < max;

//     return (
//       <StyletronProvider value={engine}>
//         <BaseProvider theme={LightTheme}>
//           <Container>
//             <Button
//               shape={SHAPE.round}
//               size={SIZE.compact}
//               disabled={!isButtonEnabled}
//               onClick={this._toggle}
//             >
//               {this.state.isPlaying ? <Stop title="Stop" /> : <Start title="Show me Power Pattern" />}
//             </Button>
//             <Slider
//               {...this.props}
//               overrides={{
//                 ThumbValue: this._renderThumbValue,
//                 TickBar: () => <TickBar />
//               }}
//             />
//           </Container>
//         </BaseProvider>
//       </StyletronProvider>
//     );
//   }
// }
