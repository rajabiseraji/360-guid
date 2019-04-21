import React from 'react';
import {
    StyleSheet,
    View,
    asset
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
                styles.helpPanel,
                {
                    justifyContent: 'center',
                }
            ]
        }>
            <Image 
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
          styles.panel
        } >
            {
                this.state.showHelp ? 
                <View style = {[styles.panel, {height: 350}]}>
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
                : renderHelp()
            }
            <View style = {[styles.panel, {height: 50, justifyContent: 'flex-start'}]}>
                <MiscButton
                    style = {styles.miscButton}
                    source = {questionIcon}
                    onClick = {this._onClick}
                >
                </MiscButton>
                <Image
                    style={styles.confused} 
                    source = {
                        asset('confused.png')
                    }
                /> 
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
    height: 400,
    backgroundColor: 'red',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    transform: [
      {translate: [0, -100, -4]}
    ]
  },
  button: {
      marginRight: 100,
      marginLeft: 100
  },
  confused: {
      backgroundColor: 'blue'
  }
});
