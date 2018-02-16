import React from 'react';
import styled from 'styled-components'

const TabsStyled = styled.div`
  padding: 50px;
  background-color: #014274;
  position: relative;
  height: 510px;
  color: #FFF;
  overflow: hidden;
  .frames {
    position: absolute;
    bottom: 50px;
    display: flex;
    list-style: none;
    padding: 0;
    margin: auto;
    width: 580px;
    left: calc(50% - 265px);
    flex-flow: row wrap;
    justify-content: center;
    li {
      line-height: 25px;
      border-radius: 20px;
      display: flex;
      margin: 5px;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 11px;
      padding: 0 15px;
      background-color: #FFF;
      color: #005494;
      &.active, &:hover {
        color: #FFF;
        background-color: #0c6db6;
        cursor: pointer;
      }
    }
  }
  h1 {
    font-size: 45px;
    text-align: center;
  }
`
const Content = styled.div`
  display: flex;
  font-size: 14px;
  h3 {
    font-size: 24px;
  }
`

export const GroupsTabs = () => 
  <TabsStyled>
    <h1>Группы риска:</h1>
    <Content>
      <div className='left'>
        <img src='/images/tab_img.png' alt=''/>
      </div>
      <div className='right'>
        <h3>Школьники и студенты</h3>
        <p>В последнее десятилетие врачи отмечают печальную тенденцию: все чаще у детей школьного возраста выявляются болезни органов зрения. Сложный оптический прибор, идеально приспосабливающийся к изменчивым условиям окружающей среды, глаз оказался не подготовленным к современным реалиям.</p>
        <button>Подробнее</button>
      </div>
    </Content>
    <ul className='frames'>
      <li>Работающие за компьютером</li>
      <li className='active'>Школьники и студенты</li>
      <li>Автолюбители</li>
      <li>Люди с повышенными зрительными нагрузками</li>
      <li>Туристы</li>
    </ul>
  </TabsStyled>
