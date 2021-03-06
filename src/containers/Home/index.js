/**
 * @providesModule ContainerHome
 */

import LinearGradient from 'react-native-linear-gradient'
import { routePush } from 'actionsNavigation'
import { anotherPage } from 'configPages'
import autobind from 'autobind-decorator'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  TouchableOpacity,
  Text,
  View
} from 'react-native'

import styles from './styles'

@connect((state) => ({
  ...state.common
}))

@autobind
class HomePage extends Component {
  render() {
    const openAnother = (event) => this.props.dispatch(routePush(anotherPage))

    return (
      <View style={styles.root}>

        <TouchableOpacity activeOpacity={0.8} onPress={openAnother}>
          <LinearGradient colors={['#1ad6fd', '#1d62f0']} style={styles.button}>
            <Text style={styles.button__text}>Look Another Page</Text>
          </LinearGradient>
        </TouchableOpacity>

      </View>
    )
  }
}

export default HomePage