import React from 'react';
import { asset, Environment } from 'react-360';

import MainPanel from 'MainPanel.react';

const eiffel = asset('/historical/eiffel/card.png');
const sphinx = asset('/historical/sphinx/card.png');
const tajmahal = asset('/historical/tajmahal/card.png');
export default class HistoricalPage extends React.Component {
  constructor(props) {
    super(props);
    Environment.setBackgroundImage(asset('historicalbg.jpg'));
    this.state = {
      images: [
        {
          src: eiffel,
          routeUrl: '/place/historical/eiffel'
        }, {
          src: tajmahal,
          routeUrl: '/place/historical/tajmahal'
        }, {
          src: sphinx,
          routeUrl: '/place/historical/sphinx'
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
