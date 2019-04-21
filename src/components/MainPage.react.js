import React from 'react';
import {
    StyleSheet,
    View,
    asset,
    Image
} from 'react-360';
import {
  Link
} from "react-router-native";

import MainPageButton from 'MainPageButton.react';
import MiscButton from 'MiscButton.react';

const adventureImage = asset('adventure.png');
const historicalImage = asset('historical.png');
const naturalImage = asset('natural.png');
const questionIcon = asset('help.png');

const buttonImages = [adventureImage, historicalImage, naturalImage];

const scene_count = 3;

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHelp: false
    };
  }
  
  _onClick = () => {
    this.setState({
      showHelp: !this.state.showHelp
    });
  };

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

  render() {
      return ( 
        <View style = {
            [
                styles.panel,
                {
                    flexDirection: !this.state.showHelp ? 'column' : 'row'
                }

            ]
        } >
            {
                !this.state.showHelp ? 
                <View style = {styles.mainPanel}>
                    <MainPageButton
                        style = {styles.button}
                        source = {naturalImage}
                        onClick = {
                            () => {
                                this.props.history.push('/natural');    
                            }
                        } 
                    />
                    <MainPageButton
                        style = {styles.button}
                        source = {historicalImage}
                        onClick = {
                            () => {
                                this.props.history.push('/historical');    
                            }
                        } 
                    />
                    <MainPageButton
                        style = {styles.button}
                        source = {adventureImage}
                        onClick = {
                            () => {
                                this.props.history.push('/adventure');    
                            }
                        } 
                    />
                </View>
                : this._renderHelp()
            }
            <View style = {
                styles.miscPanel
            }>
                <Image
                    style={styles.confused} 
                    source = {
                        asset('confused.png')
                    }
                /> 
                <MiscButton
                    style = {styles.miscButton}
                    source = {questionIcon}
                    onClick = {this._onClick}
                >
                </MiscButton>
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
  noTransform: {
    transform: [
      {translate: [0, 0, 0]}
    ]
  },
  button: {
      marginRight: 100,
      marginLeft: 100
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
