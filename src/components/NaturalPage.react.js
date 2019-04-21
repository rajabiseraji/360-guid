import React from 'react';
import {
  Environment,
  StyleSheet,
  View,
  asset
} from 'react-360';

// import MainPageButton from 'MainPageButton.react';

export default class HistoricalPage extends React.Component {
  constructor(props) {
    super(props);
    Environment.setBackgroundImage(asset('naturalbg.jpg'));
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
    return null
  }
};

// defining StyleSheet
// const styles = StyleSheet.create({
//   panel: {
//     width: 400,
//     height: 300,
//     backgroundColor: 'red',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     transform: [
//       {translate: [0, 0, -4]}
//     ]
//   }
// });
