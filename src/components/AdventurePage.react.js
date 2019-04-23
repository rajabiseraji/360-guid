import React from 'react';
import { asset, Environment } from 'react-360';

import MainPanel from 'MainPanel.react';
const skydiving = asset('/adventure/skydiving/card.png');
export default class AdventurePage extends React.Component {
  constructor(props) {
    super(props);
    Environment.setBackgroundImage(asset('adventurebg.jpg'));
    this.state = {
      images: [
        {
          src: skydiving,
          routeUrl: '/place/adventure/skydiving',
          name: 'Skydiving'
        }
      ]
    };
  }
  
  render() {
    return ( 
        <MainPanel 
            isHomePage={false}
            images={this.state.images}
            history={this.props.history}
        />
    )
  };
}
