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

const adventureImage = asset('adventure.png');
const historicalImage = asset('historical.png');
const naturalImage = asset('natural.png');

const buttonImages = [adventureImage, historicalImage, naturalImage];

const scene_count = 3;

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }
  
  _onClick = (index) => {
    this.setState({
      index: index
    });
  };

  render() {
    // const sceneButtons = [];
    // for (const i = 0; i < scene_count; i++) {
    //   sceneButtons.push( 
    //     <MainPageButton 
    //       key = {i}
    //       ref = {i}
    //       style = {
    //           styles.button
    //         }
    //         source = {
    //           buttonImages[i]
    //         }
    //         text = {
    //           `Scene ${i}`
    //         }
    //         onClick = {
    //           () => {
    //             this._onClick(i);
    //           }
    //       }
    //     />)
    //   }
      return ( 
        <View style = {
          styles.panel
        } >
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
  }
});
