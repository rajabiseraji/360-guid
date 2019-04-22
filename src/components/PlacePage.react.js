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

  _changeMode = (newMode) => {
    this.setState({
      timeOfDay: newMode.timeOfDay, 
      weather: newMode.weather
    });
    const {
      name,
      category
    } = this.props.match.params;
    const newWeatherString = newMode.weather.key !== 'clear' ? `_${newMode.weather.key}` : '';
    Environment.setBackgroundImage(asset(`/${category}/${name}/${newMode.timeOfDay.key}${newWeatherString}.jpg`))
  }
  
  render() {
    return ( 
        <MainPanel 
            isHomePage={false}
            hasOptions={true}
            images={[]}
            history={this.props.history}
            onChangeMode={this._changeMode}
            timeOfDay={this.state.timeOfDay}
            weather={this.state.weather}
        />
    )
  };
}
