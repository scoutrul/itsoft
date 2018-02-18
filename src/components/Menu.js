import React from 'react';
import styled, { css } from 'styled-components'

import { data } from '../data.js'

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

const MenuStyled = styled.div`
  background-color: #005494;
  min-width: 210px;
  padding: 20px 25px;

  ${media.tablet`
  position: fixed;
  height: 100vh;
  min-height: 100%;
  top:0;
  left: 0;
  transform: ${props => props.menuTogger ? 'translateX(0px)' : 'translateX(-260px)'};
  transition: .2s ease;
  ${props => props.menuTogger && `
  + div {
    transform: translateX(260px);

  }`}
  z-index: 10;`}  
`
const Social = styled.div`
  img {
    opacity: .8;
    &:hover {
      opacity: 1;
    }
  }
`

const Ul = styled.ul`
  margin: 25px 0 400px;
  padding: 0;
  list-style: none;
  li a{
    font-size: 16px;
    line-height: 200%;
    color: #FFF;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    
    }
  }
`

export const Menu = ({ menuTogger }) => {
  return <MenuStyled menuTogger={menuTogger}>
    <Social>
      <a href="#f"><img src='/images/icon_f.png' alt='' /></a>
      <a href="#t"><img src='/images/icon_t.png' alt='' /></a>
      <a href="#s"><img src='/images/icon_s.png' alt='' /></a>
    </Social>
    <Ul>
      {data.menu.map(({ title, url }, i) =>
        <li key={i}><a href={url}>{title}</a></li>
      )}
    </Ul>
    <hr />
    <span>
      Горячая линия <br />по России
    </span>
    <div>
      <strong>8-800-000-00-00 </strong>
    </div>

  </MenuStyled>

}