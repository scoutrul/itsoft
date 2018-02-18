import React, { Component } from 'react';

import styled from 'styled-components'

import { TopPanel } from './components/TopPanel'
import { GlazComp } from './components/Glaz'
import { Menu } from './components/Menu'
import { Slider } from './components/Slider'
import { GroupsTabs } from './components/GroupsTabs'
import { Info } from './components/Info'
import { Disclamer } from './components/Disclamer'
import { Footer } from './components/Footer'

const AppStyled = styled.div`
  display: flex;
  font-family: 'Open Sans', sans-serif;
`
const Content = styled.div`
  display: flex;
  flex-flow: column;
  overflow-y: auto;
  transition: .2s ease;
`

class App extends Component {
  state = {
    menu: false
  }

  openMenu = () => this.setState(({ menu }) => {
    return { menu: !menu }
  })

  componentDidUpdate() {
    console.log(this.state)
  }

  render() {
    return (
      <AppStyled>
        <Menu menuTogger={this.state.menu}/>
        <Content>
          <TopPanel menuTogger={this.openMenu} />
          <GlazComp />
          <Slider />
          <GroupsTabs />
          <Info />
          <Disclamer />
          <Footer />
        </Content>
      </AppStyled>
    );
  }
}

export default App;
