import React from 'react';
import { asset, Environment } from 'react-360';

import MainPanel from 'MainPanel.react';

const amazon = asset('/natural/amazon/card.png');
const hawaii = asset('/natural/hawaii/card.png');
const rakaposhi = asset('/natural/rakaposhi/card.png');
export default class NaturalPage extends React.Component {
  constructor(props) {
    super(props);
    Environment.setBackgroundImage(asset('naturalbg.jpg'));
    this.state = {
      images: [
        {
          src: amazon,
          routeUrl: '/place/natural/amazon'
        }, {
          src: rakaposhi,
          routeUrl: '/place/natural/rakaposhi'
        }, {
          src: hawaii,
          routeUrl: '/place/natural/hawaii'
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
