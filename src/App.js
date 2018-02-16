import React, { Component } from 'react';
import styled from 'styled-components'

import {TopPanel} from './components/TopPanel'
import {GlazComp} from './components/Glaz'
import {Menu} from './components/Menu'
import {Slider} from './components/Slider'
import {GroupsTabs} from './components/GroupsTabs'
import {Info} from './components/Info'
import {Disclamer} from './components/Disclamer'
import {Footer} from './components/Footer'

const AppStyled = styled.div`
  display: flex;
  font-family: 'Open Sans', sans-serif;
`
const Content = styled.div`
  display: flex;
  flex-flow: column;
`

class App extends Component {
  render() {
    return (
      <AppStyled>
        <Menu/>
        <Content>
          <TopPanel/>
          <GlazComp/>
          <Slider/>
          <GroupsTabs/>
          <Info/>
          <Disclamer/>
          <Footer/>
        </Content>
      </AppStyled>
    );
  }
}

export default App;
