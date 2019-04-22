import React from 'react';
import { asset, Environment } from 'react-360';

import MainPanel from 'MainPanel.react';

export default class AdventurePage extends React.Component {
  constructor(props) {
    super(props);
    Environment.setBackgroundImage(asset('adventurebg.jpg'));
    this.state = {
      images: []
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
