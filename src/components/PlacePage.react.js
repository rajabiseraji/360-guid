import React from 'react';
import { asset, Environment } from 'react-360';

import MainPanel from 'MainPanel.react';

export default class PlacePage extends React.Component {
  constructor(props) {
    super(props);
    const name = {props};
    const category = {props};
    Environment.setBackgroundImage(asset(`/${category}/${name}`));
  }
  
  render() {
    return ( 
        <MainPanel 
            isHomePage={false}
            hasOptions={true}
            images={this.state.images}
            history={this.props.history}
        />
    )
  };
}
