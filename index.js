import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  asset,
  Environment,
} from 'react-360';
import MainPageButton from 'MainPageButton.react';

const adventureImage = asset('adventure.png');
const historicalImage = asset('historical.png');
const naturalImage = asset('natural.png');

const buttonImages = [adventureImage, historicalImage, naturalImage];

const scene_count = 3;

export default class Hello360 extends React.Component {
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
            style = {
              styles.button
            }
            source = {
              adventureImage
            }
            text = {
              `Scene `
            }
            onClick = {
                () => {
                  this._onClick(1);
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
    width: 500,
    height: 300,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    transform: [
      {translate: [0, 0, -4]}
    ]
  }
});

// register the root component
// this will be used from client.js by r360.createRoot('BasicAppTemplate' ...)
AppRegistry.registerComponent('Hello360', () => Hello360);

