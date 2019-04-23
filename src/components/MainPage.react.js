import React from 'react';
import { asset, Environment } from 'react-360';

import MainPanel from 'MainPanel.react';

const adventureImage = asset('adventure.png');
const historicalImage = asset('historical.png');
const naturalImage = asset('natural.png');
export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    Environment.setBackgroundImage(asset('main.jpg'));
    this.state = {
      images: [
          {
              src: adventureImage,
              routeUrl: '/adventure',
              name: 'Adventure Sports Section'
          },
          {
              src: naturalImage,
              routeUrl: '/natural',
              name: 'Natural Landscapes Section'
          },
          {
              src: historicalImage,
              routeUrl: '/historical',
              name: 'Historical Monuments Section'
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
