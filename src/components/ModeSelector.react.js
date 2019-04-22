import React from 'react';

export default class ModeSelector extends React.Component {
    static defaultProps = {
        onChangeMode: () => {},
        weather: 'sunny',
        timeOfDay: 'day'
    }

    constructor(props) {
        super(props);
        this.state = {
            weather: 'sunny',
            timeOfDay: 'day'
        }
    }

    _onWeatherChange(newWeather) {
        this.setState({
            weather: newWeather
        })
    }

    _onTimeOfDayChange(newTimeOfDay) {
        this.setState({
            timeOfDay: newTimeOfDay
        })
    }

    _onApplySettings() {
        this.props.onChangeMode({
            weather: this.state.weather,
            timeOfDay: this.state.timeOfDay
        });
    }

    render() {
        return (

        )
    }
}