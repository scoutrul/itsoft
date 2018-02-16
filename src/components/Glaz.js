import React from 'react';
import styled, {css} from 'styled-components'
import {data} from '../data.js'

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


const GlazStyled = styled.div`
  background-color: ${props => props.bgcolor};
  background-image: url(${props => props.picture});
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
  display: flex;
  flex: 1 1 auto;
  padding: 25px;
  width: 100%;
  min-height: 420px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    color: #FFF;
    text-transform: uppercase;
    font-size: 16px;
    line-height: 100%;
  }
  h3 {
    opacity: 0;
    font-size: 24px;
    text-align: right;
    color: #FFF
  }

  ${media.unlim`
    max-width: 50%;`}
  ${media.tablet`
    min-height: 50vw;`}   
  ${media.phone`
    max-width: 100%;
    min-height: 100vw;
    h2 {
      font-size: 12px
    }
  
  `}
  .products {
    opacity: 0;
    a {
      position: relative;
      span { 
        font-size: 13px;
        opacity: 0;
        position: absolute;
        top: -40px;
        left: 30px;
        padding: 0 20px;
        line-height: 40px;
        color: #4282ad;
        display: block;
        background-color: white;
        border-radius: 30px;
        white-space: nowrap;
        z-index: 10;
      }
      &:hover {
        span { opacity: 1}
      }
    }
  }
  &:hover {
    background-image: url(${props => props.picture2});
    h2 {opacity: 0}
    h3 {opacity: .5}
    .products {
      opacity: 1
    }
  }

`
export const Glaza = styled.div`
  display: flex;
  flex-flow: row wrap;
`

export const Glaz = ({bgcolor, title, title2, title3, picture, picture2, products}) => 
  <GlazStyled bgcolor={bgcolor} picture={picture} picture2={picture2}> 
    <div>
      <h2>{title}</h2>
      <h2>{title2}</h2>
      <h3>{title3}</h3>
    </div>
    <div className='products'>
      {products && products.map(({title, src}, i)=>
        <a href={title} key={i}>
          <img src={src} alt={title} title={title} key={src}/>
          <span>{title}</span>
        </a>
      )} 
    </div>
   </GlazStyled>

export const GlazComp = () => 
  <Glaza>
  {data.glaza.map((item,i) => 
      <Glaz key={i} bgcolor={item.bgcolor} 
        picture={item.picture} picture2={item.picture2}  
        title={item.title} title2={item.title2} title3={item.title3} 
        products={item.products}/>
  )}
</Glaza>