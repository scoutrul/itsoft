import React from 'react';
import styled, {css} from 'styled-components'

const sizes = {
  unlim: 10000,
  desktop: 992,
  tablet: 768,
  phone: 420
}

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})


const InfoStyled = styled.div`
  display: flex;
  flex-flow: row wrap;
  div {
    width: 100%;
    box-sizing: border-box;
    ${media.unlim`
    max-width: 50%;`}
  
    ${media.phone`
    max-width: 100%;    `}
  }
`
const Container = styled.div`
    padding: 85px 35px 45px 35px;
    background-image: url(${props => props.bgimg});
    .info {
      display: flex;
      align-items: flex-start;
    }
`

const Test = () => 
  <Container>
    <h3>On-line тест</h3>
    <p>Мы предлагаем пройти небольшой тест, который поможет легко и комфортно проверить остроту, контрастность и цветовосприятие вашего зрения. </p>
    <button>Пройти тест</button>
    <div className='info'>
      <img src='/images/icon_goal.png' alt=''/>
      <p>
        Если по результатам теста Вы отметите ухудшение зрения, Вам следует обратиться к офтальмологу за дополнительной консультацией.
      </p>
    </div>
  </Container>

const Buy = ({bgimg}) => 
<Container bgimg={bgimg}>
  <h3>Где купить</h3>
  <p>Препараты можно преобрести в аптеках по всей России, а так же в интернет аптеках</p>
  <button>Подробнее</button>
</Container>


export const Info = () => 
  <InfoStyled>
    <Test/>
    <Buy bgimg='/images/buy_bgimg.png'/>
</InfoStyled>