import React from 'react'
import { Component } from "react"; 

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { TabBar }  from '../navigationConfiguration'

//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
 return {
  navigationState: state.tabBar,
  }
}

class TabBarNavigation extends Component {

  render(){
    const { dispatch, navigationState } = this.props
    return (
      <TabBar
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState,
          })
        }
      />
    )
  }
}

export default connect(mapStateToProps)(TabBarNavigation)