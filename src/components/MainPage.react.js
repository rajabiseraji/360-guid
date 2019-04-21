import React from 'react';
import { asset } from 'react-360';

import MainPanel from 'MainPanel.react';

const adventureImage = asset('adventure.png');
const historicalImage = asset('historical.png');
const naturalImage = asset('natural.png');
export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
          {
              src: adventureImage,
              routeUrl: '/adventure'
          },
          {
              src: naturalImage,
              routeUrl: '/natural'
          },
          {
              src: historicalImage,
              routeUrl: '/historical'
          }
      ]
    };
  }
  
  render() {
    return ( 
        <MainPanel 
            isHomePage={true}
            images={this.state.images}
            history={this.props.history}
        />
    )
  };
}
