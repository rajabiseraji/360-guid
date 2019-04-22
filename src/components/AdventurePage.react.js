import React from 'react';
import { asset, Environment } from 'react-360';

import MainPanel from 'MainPanel.react';

export default class MainPage extends React.Component {
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
            isHomePage={true}
            images={this.state.images}
            history={this.props.history}
        />
    )
  };
}
