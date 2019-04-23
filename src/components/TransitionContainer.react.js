/**
 * A simple component to use
 * Do the "providesModule" provides module name to haste map
 * So you can reference it from other file by
 * import MainPageButton from "MainPageButton.react"
 * @providesModule TransitionContainer.react
 */
'use strict';
import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-360';

const TransitionContainer = (props) => {
    return (
        <View style={
            [
                styles.mainPanel,
                {
                    position: 'absolute',
                    zIndex: 100,
                    justifyContent: 'center',
                    height: 500,
                    width: 600,
                    transform: [{
                        translate: [0, 0, -200]
                    }]
                }
            ]
        }>
            <View style={styles.card}>
                <Text style={styles.title}>
                    {`Going to ${props.nextPlace}`}
                </Text>
            </View>  
        </View>
      )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 5,
        borderColor: 'gray',
        height: 200,
        width: 400,
        padding: 20,
        width: 800,
        flex: 1, 
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#363636',
        textAlign: 'center',
        fontSize: 40
    },
    mainPanel: {
        flexDirection: 'row',
        width: 4096,
        height: 300,
        backgroundColor: 'transparent',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20,
    },
})

export default TransitionContainer;
