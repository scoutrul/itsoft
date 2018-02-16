import React from 'react';
import styled from 'styled-components'

const Styled = styled.div`
  font-size: 40px;
  text-align: center;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 300;
  color: #b6b6b6;
  padding: 50px 30px;
  box-shadow: inset 0px 11px 20px -10px #becfd8;
`

export const Disclamer = () => 
  <Styled>
    ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ. ПЕРЕД ПРИМЕНЕНИЕМ ОЗНАКОМЬТЕСЬ
    С ИНСТРУКЦИЕЙ И ПРОКОНСУЛЬТИРУЙТЕСЬ СО СПЕЦИАЛИСТОМ
  </Styled>
