import React from 'react';
import styled from 'styled-components'

const Styled = styled.div`
  padding: 70px 35px; 
  box-shadow: inset 0px 15px 20px -10px #becfd8;
  display: flex;
  font-family: 'Ubuntu', sans-serif;
  color: #929292;
  justify-content: space-between;
  align-items: center;
`

export const Footer = () => 
  <Styled>
    <div>
      <img src='/images/logo_val.png'/>
    </div>
    <div>
      ООО «ВАЛЕАНТ», 115162, г. Москва, ул. Шаболовка, д. 31, стр. 5<br/>
      Тел./Факс: +7 495 510-2879  www.valeant.com
    </div>

    <div>
      <img src='/images/logo_itsoft.png'/>
      <div>
        <a href="#">Создание сайта.</a>
        <span>Веб-студия itsoft</span>
      </div>
    </div>
  </Styled>
