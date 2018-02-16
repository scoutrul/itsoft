import React from 'react';
import styled from 'styled-components'

const TopPanelStyled = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 45px;
  align-items: center;
  padding: 0 25px;
  .logos {

  }
`

export const TopPanel = () => 
  <TopPanelStyled>
    <div className='logos'>
      <img src="/images/logo_lomb.png" alt=''/> | 
      <img src="/images/logo_val.png" alt=''/>
    </div>
    <div className='feedback'>
      <img src="/images/icon_feedback.png" alt=''/> 
      <span>Задать вопрос производителю</span>
    </div>
  </TopPanelStyled>
