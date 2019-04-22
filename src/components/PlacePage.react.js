import React from 'react';
import { asset, Environment } from 'react-360';

import MainPanel from 'MainPanel.react';

export default class PlacePage extends React.Component {
  constructor(props) {
    super(props);
    const {name, category} = props.match.params;
    Environment.setBackgroundImage(asset(`/${category}/${name}/day.jpg`));
    this.state = {
      timeOfDay: 'day',
      weather: 'sunny'
    }
  }

  _changeMode(newMode) {
    this.setState({
      timeOfDay: newMode.timeOfDay, 
      weather: newMode.weather
    });
    const newWeatherString = newWeather !== 'sunny' ? `_${newWeather}` : '';
    Environment.setBackgroundImage(asset(`/${category}/${name}/${newTimeOfDay}${newWeatherString}.jpg`))
  }
  
  render() {
    return ( 
        <MainPanel 
            isHomePage={false}
            hasOptions={true}
            images={[]}
            history={this.props.history}
            onChangeMode={this._changeMode}
        />
    )
  };
}
