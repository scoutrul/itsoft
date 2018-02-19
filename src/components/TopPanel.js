import React, { Component } from 'react';
import styled, { css } from 'styled-components'

import Modal from './Modal'
import MyForm from './Form'

const sizes = {
  tablet: 1000,
}

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const TopPanelStyled = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 45px;
  align-items: center;
  padding: 0 25px;
  .menuTogger {
    visibility: hidden;
    ${media.tablet`
    visibility: visible`
  }
`

export class TopPanel extends Component {

  state = {
    modal: false
  }

  modalToggle = (e) => {
    e.preventDefault();
    this.setState(({modal})=>{
      return {modal: !modal} })
  }

  
  render() {

    return (
      <TopPanelStyled>
        <div className='menuTogger' onClick={this.props.menuTogger}>menuTogger</div>
        <div className='logos'>
          <img src="/images/logo_lomb.png" alt='' /> |
         <img src="/images/logo_val.png" alt='' />
        </div>
        <div className='feedback'>
          <img src="/images/icon_feedback.png" alt='' />
          <span onClick={this.modalToggle}>Задать вопрос производителю</span>
          {this.state.modal && <Modal>
            <div className='container' onClick={this.modalToggle}>
              <div className='body' onClick={(e)=>e.stopPropagation()}>

                <MyForm/>

                <button onClick={this.modalToggle}>Close</button>
              </div>
            </div>
          </Modal>}
        </div>
      </TopPanelStyled>
    )
  }
}