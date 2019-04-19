import React from 'react';
import {
    StyleSheet,
    View,
    asset
} from 'react-360';

import MainPageButton from 'MainPageButton.react';


export default class LeftPanel extends React.Component {
    constructor(props) {
        super(props);
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
        return ( < View style = {
                styles.panel
            } >
            </View>
        );
    }
};

// defining StyleSheet
const styles = StyleSheet.create({
    panel: {
        width: 400,
        height: 300,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        transform: [{
            translate: [0, 0, -4]
        }]
    }
});