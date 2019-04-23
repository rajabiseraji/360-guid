/**
 * A simple component to use
 * Do the "providesModule" provides module name to haste map
 * So you can reference it from other file by
 * import MainPageButton from "MainPageButton.react"
 * @providesModule MainPanel.react
 */
'use strict';

import React from 'react';
import {
    StyleSheet,
    View,
    asset,
    Image,
    VrButton
} from 'react-360';

import MiscButton from 'MiscButton.react';
import MainPageButton from 'MainPageButton.react';
import ModeSelector from 'ModeSelector.react';


const questionIcon = asset('help.png');
const homeIcon = asset('home.png');
const backIcon = asset('back.png');

export default class MainPanel extends React.Component {
    static defaultProps = {
        isHomePage: false,  
        hasOptions: false,
        images: []
    }
  constructor(props) {
    super(props);
    this.state = {
      showHelp: false,
      showSetting: false
    };
  }
  
  _onClick = () => {
    this.setState({
      showHelp: !this.state.showHelp
    });
  };

  _onClickSetting = () => {
    this.setState({
      showSetting: !this.state.showSetting
    });
  };

  _changeModeHandler = (newMode) => {
      this.setState({
        showSetting: false
      });
      this.props.onChangeMode(newMode);
  }

  _goToRandomRoute = () => {
      /**
       * This is quite lazy coding but since we're not using a 
       * dynamic application, it's fine to declare an array of our places 
       * here in this function
       */
      const places = [
          'adventure/skydiving',
          'natural/amazon',
          'natural/hawaii',
          'natural/rakaposhi',
          'historical/eiffel',
          'historical/sphinx',
          'historical/tajmahal'
      ];
      const randomPlace = places[Math.floor(Math.random() * places.length)];
      const randomRoute = `/place/${randomPlace}`;
      this.props.history.push(randomRoute);
  }

  _renderModeSelector = () => {
      if(this.state.showSetting) {
          return (
              <View style={
                [
                    styles.mainPanel,
                    {
                        justifyContent: 'flex-start',
                        marginLeft: 300,
                        height: 500,
                        width: 800,
                        zIndex: 10,
                        position: 'absolute',
                        transform: [{
                            translate: [0, 0, -400]
                        }]
                    }
                ]
            }>
                <ModeSelector 
                    onChangeMode={this._changeModeHandler}
                    onClose = {() => {
                        this.setState({
                            showSetting: false
                        });
                    }}
                    weather={this.props.weather}
                    timeOfDay={this.props.timeOfDay}
                />
            </View>
          )
      }
  }

  _renderHelp = () => {
      return (
        <View style={
            [
                styles.mainPanel,
                {
                    justifyContent: 'flex-end',
                    marginRight: 300,
                    height: 500,
                    transform: [{
                        translate: [0, 0, -400]
                    }]
                }
            ]
        }>
            <Image 
                style = {styles.helpText}
                source = {
                    asset('mainHelp.png')
                }
            />  
        </View>
      )
  }

  _renderPageImages = () => {
        return (
            <View style = {
                [
                    styles.mainPanel,
                    {
                        height: this.props.isHomePage ? 300 : 400
                    }
                ]
            }>
                {
                    this.props.images.map((image) => 
                        (<MainPageButton
                            style = {
                                styles.button
                            }
                            source = {image.src}
                            key={image.routeUrl}
                            onClick = {
                                () => {
                                    this.props.history.push(image.routeUrl);    
                                }
                            } 
                        />)
                    )
                }
                {
                    !this.props.isHomePage ? 
                    <MiscButton
                        style = {styles.backButton}
                        source = {backIcon}
                        onClick = { () => {this.props.history.go(-1)}}
                    /> : null
                }
                {
                    this.props.hasOptions ? 
                    <MiscButton
                        style = {styles.optionsButton}
                        source = {asset('setting.png')}
                        onClick = {this._onClickSetting}
                    /> : null
                }
            </View>
        );
  }

  render() {
      return ( 
        <View style = {
            [
                styles.panel,
                {
                    flexDirection: !this.state.showHelp ? 'column' : 'row',
                }

            ]
        }>
            {!this.state.showHelp ? this._renderPageImages() : this._renderHelp()}
            {this._renderModeSelector()}
            <View style = {
                styles.miscPanel
            }>
                {
                    this.props.isHomePage ? 
                    <VrButton onClick={this._goToRandomRoute}>
                        <Image
                            style={styles.confused} 
                            source = {
                                asset('confused.png')
                            }
                        />
                    </VrButton> : null
                }
                <MiscButton
                    style = {styles.miscButton}
                    source = {questionIcon}
                    onClick = {this._onClick}
                />
                {
                    !this.props.isHomePage ? 
                    <MiscButton
                        style = {styles.miscButton}
                        source = {homeIcon}
                        onClick = {() => {this.props.history.push('/')}}
                    /> : null
                }
            </View>
        </View>
      );
    }
  };

// defining StyleSheet
const styles = StyleSheet.create({
  panel: {
    flex: 1,
    flexDirection: 'row',
    width: 4096,
    height: 600,
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    transform: [
      {translate: [0, -100, -4]}
    ]
  },
  mainPanel: {
    flexDirection: 'row',
    width: 4096,
    height: 300,
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  miscPanel: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      position: 'absolute',
      right: 0,
      left: 0,
      bottom: 0,
      height: 100
  },
  miscButton: {
    marginLeft: 10,
    marginRight: 10,
  },
  optionsButton: {
      height: '30%'
  },
  noTransform: {
    transform: [
      {translate: [0, 0, 0]}
    ]
  },
  button: {
      marginRight: 100,
      marginLeft: 100
  },
  backButton: {
    position: 'absolute',
    top: '50%',
    height: 150,
    left: 0,
  },
  helpText: {
    height: '100%',
    aspectRatio: 1.66,
  },
  confused: {
      height: '100%',
      aspectRatio: 2.14,
      marginLeft: 50,
      marginRight: 10
  }
});
