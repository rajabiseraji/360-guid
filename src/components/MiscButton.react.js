/**
 * A simple component to use
 * Do the "providesModule" provides module name to haste map
 * So you can reference it from other file by
 * import MainPageButton from "MainPageButton.react"
 * @providesModule MiscButton.react
 */
'use strict';

import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    VrButton,
    asset
} from 'react-360';

const FOCUS_SCALE = 1.3;

class MainPageButton extends React.Component {
    static defaultProps = {
        width: 180,
        text: '',
        source: ''
    };

    // This component has example to show how animation works
    // You can check the doc: https://facebook.github.io/react-native/docs/0.49/animated#docsNav
    constructor(props) {
        super(props);
        this.state = {
            hasFocus: false,
        };
    }

    _focus = () => {
        // start an animation
        console.log('====================================');
        console.log('in');
        console.log('====================================');
        this.setState({
            hasFocus: true
        });
    };

    _blur = () => {
        this.setState({
            hasFocus: false
        });
    };

    _click = () => {
        // input handling
        this.props.onClick && this.props.onClick();
    };

    render() {
        return ( 
            <View style = {
                [
                    styles.wrapper,
                    this.props.style,
                    {
                        width: this.props.width
                    }
                ]
            }>
                <VrButton onClick = {
                    this._click
                } //this event trigger when click the view
                onExit = {
                    this._blur
                } //this event trigger when cursor move out of the view
                onEnter = {
                    this._focus
                } //this event trigger when cursor move into of the view
                >
                    <View style = {
                        [
                            styles.button,
                            this.state.hasFocus && styles.buttonFocused,
                            {
                                // With this the width of the this view
                                // is animated with the value of scaleAnim
                                // by an interpolation
                                width: this.props.width,
                            }
                        ]
                    } >
                        <Image style = {
                            styles.icon
                            }
                            source = {
                                this.props.source
                            }
                        /> 
                    </View> 
                </VrButton> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#639dda',
        borderWidth: 2,
        borderRadius: 5,
        flexDirection: 'row',
    },
    buttonFocused: {
        backgroundColor: 'white',
        borderColor: '#4477dd',
    },
    icon: {
        padding: 20,
        tintColor: 'grey',
        height: '100%',
        aspectRatio: 1,
    },
    iconFocused: {
        tintColor: 'white',
    },
    text: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        flex: 1,
    },
});

module.exports = MainPageButton;