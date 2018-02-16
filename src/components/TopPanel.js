import React from 'react';
import styled, {css} from 'styled-components'

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

export const TopPanel = ({menuTogger}) => 
  <TopPanelStyled>
    <div className='menuTogger' onClick={menuTogger}>menuTogger</div>
    <div className='logos'>
      <img src="/images/logo_lomb.png" alt=''/> | 
      <img src="/images/logo_val.png" alt=''/>
    </div>
    <div className='feedback'>
      <img src="/images/icon_feedback.png" alt=''/> 
      <span>Задать вопрос производителю</span>
    </div>
  </TopPanelStyled>
