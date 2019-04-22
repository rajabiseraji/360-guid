/**
 * A simple component to use
 * Do the "providesModule" provides module name to haste map
 * So you can reference it from other file by
 * import MainPageButton from "MainPageButton.react"
 * @providesModule ButtonGroup.react
 */
'use strict';

import React from 'react';
import { StyleSheet, VrButton, Image, Text, View } from 'react-360';

export default class ButtonGroup extends React.Component {
    static defaultProps = {
        options: [],
        onOptionChange: () => {}
    }

    _optionChanged = (newOptionIndex) => {
        this.props.onOptionChange(newOptionIndex);
    }

    render() {
        const buttons = this.props.options.map((option, index) => (
            <VrButton
                key={option.text + '-' + option.index}
                onClick={() => this._optionChanged(index)}
                style={[
                    styles.button,
                    option.isActive ? styles.activeButton : null
                ]}
            >
                <Image 
                    style={styles.iconImage} 
                    source={option.imgSrc} />
                <Text style={styles.buttonText}>{option.text}</Text>
            </VrButton>
        ));
        return (
            <View style={styles.wrapper}>
                {buttons}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        height: 120,
        padding: 10,
        width: '100%',
        justifyContent: 'center'
    }, 
    button: {
        backgroundColor: 'rgb(108,108,108)',
        borderRadius: 5,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10,
        height: 100,
        width: 100,
        padding: 10
    },
    activeButton: {
        backgroundColor: 'rgb(75, 98, 151)'
    },
    iconImage: {
        height: 100,
        flex: 10
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    }
});