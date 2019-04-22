import React from 'react';
import { asset, Environment } from 'react-360';

import MainPanel from 'MainPanel.react';

export default class PlacePage extends React.Component {
  constructor(props) {
    super(props);
    const {name, category} = props.match.params;
    Environment.setBackgroundImage(asset(`/${category}/${name}/day.jpg`));
  }
  
  render() {
    return ( 
        <MainPanel 
            isHomePage={false}
            hasOptions={true}
            images={[]}
            history={this.props.history}
        />
    )
  };
}
