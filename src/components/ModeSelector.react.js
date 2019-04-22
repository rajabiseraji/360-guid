/**
 * A simple component to use
 * Do the "providesModule" provides module name to haste map
 * So you can reference it from other file by
 * import MainPageButton from "MainPageButton.react"
 * @providesModule ModeSelector.react
 */
'use strict';

import React from 'react';
import { View, Text, StyleSheet, VrButton, asset } from 'react-360';

import ButtonGroup from 'ButtonGroup.react';
import MiscButton from 'MiscButton.react';

const backIcon = asset('back.png');
export default class ModeSelector extends React.Component {
    static defaultProps = {
        onChangeMode: () => {},
        weather: {},
        timeOfDay: {}
    }

    constructor(props) {
        super(props);
        const timeOfDayOptions = [
                {
                    isActive: true,
                    imgSrc: asset('/mode/sun.png'),
                    text: 'Day Time',
                    key: 'day'
                },
                {
                    isActive: false,
                    imgSrc: asset('/mode/moon.png'),
                    text: 'Night Time',
                    key: 'night'
                }
        ];
        const weatherOptions = [{
                isActive: true,
                imgSrc: asset('/mode/sun.png'),
                text: 'Clear',
                key: 'clear'
            },
            {
                isActive: false,
                imgSrc: asset('/mode/snow.png'),
                text: 'Snowy',
                key: 'snow'
            },
            {
                isActive: false,
                imgSrc: asset('/mode/rain.png'),
                text: 'Rainy',
                key: 'rain'
            },
        ];
        this.state = {
            timeOfDayOptions,
            weatherOptions,
            weather: props.weather || weatherOptions[0],
            timeOfDay: props.timeOfDay || timeOfDayOptions[0],
        }
    }

    _onWeatherChange = (newWeatherIndex) => {
        let newWeatherOptions = Object.assign([], this.state.weatherOptions);
        newWeatherOptions = newWeatherOptions.map((option, index) => ({...option, isActive: newWeatherIndex === index}));
        this.setState({
            weather: this.state.weatherOptions[newWeatherIndex],
            weatherOptions: newWeatherOptions
        })
    }

    _onTimeOfDayChange = (newTimeOfDayIndex) => {
        let newTimeOfDayOptions = Object.assign([], this.state.timeOfDayOptions);
        newTimeOfDayOptions = newTimeOfDayOptions.map((option, index) => ({...option, isActive: newTimeOfDayIndex === index}));
        this.setState({
            timeOfDay: this.state.timeOfDayOptions[newTimeOfDayIndex],
            timeOfDayOptions: newTimeOfDayOptions
        })
    }

    _onApplySettings = () => {
        this.props.onChangeMode({
            weather: this.state.weather,
            timeOfDay: this.state.timeOfDay
        });
    }

    render() {
        return (
            <View style={styles.card}>
                <Text style={styles.title}>Change the Mode</Text>
                <View style={styles.timeRow}>
                    <Text style={styles.title}>Time</Text>
                    <ButtonGroup 
                        options={this.state.timeOfDayOptions}
                        onOptionChange={this._onTimeOfDayChange}
                    />
                </View>
                <View style={styles.timeRow}>
                    <Text style={styles.title}>Weather</Text>
                    <ButtonGroup 
                        options={this.state.weatherOptions}
                        onOptionChange={this._onWeatherChange}
                    />
                </View>
                <View style={styles.lastRow}>
                    <MiscButton
                        style = {styles.backButton}
                        source = {backIcon}
                        onClick = { () => {this.props.onClose()}}
                    />
                    <VrButton
                        onClick={() => this._onApplySettings()}
                        style={
                            styles.applyButton
                        }
                    >
                        <Text style={styles.buttonText}>Apply</Text>
                    </VrButton>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#363636',
        borderRadius: 10,
        height: 400,
        padding: 20,
        width: 800,
        flex: 1, 
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 20
    },
    timeRow: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10
    },
    backButton: {
        position: 'absolute',
        height: 50,
        left: 0,
    },
    applyButton: {
        backgroundColor: '#8ee3b2',
        padding: 6,
        borderRadius: 5,
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: '#363636',
        fontSize: 20
    },
    lastRow: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})