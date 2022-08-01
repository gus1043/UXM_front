import React, { Component } from 'react'
import MainHeader from './MainHeader'
import NewContentTab from './NewContentTab'
import Mainboard from './Mainboard'

export class MainPage extends Component {
  render() {
    return (
      <div >
        <MainHeader/>
        <hr/>

        <NewContentTab/> <br/>
        <hr/>

        <Mainboard/>



        </div>
    )
  }
}

export default MainPage