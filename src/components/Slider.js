import React, { Component } from 'react';
import styled, { css } from 'styled-components'

const sizes = {
  unlim: 10000,
  desktop: 992,
  tablet: 1100,
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


const SliderStyled = styled.div`
  display: flex;
  background-color: #d1e4f3;
  padding: 50px;
  overflow: hidden;
  position: relative;
  height: 510px;
  ${media.tablet`
  flex-flow: row wrap`} 
  .title {
    font-size: 45px;
    font-weight: 700
  }
  .text {
    font-size: 20px;
    margin: 50px 0 0 50px;
    font-weight: 300;
  }
  .left,.right {
    background-color: #005494;
    width: 120px; height: 120px;
    border-radius: 50%;
    position: absolute;
    top: calc(50% - 60px);
    display: flex;
    align-items: center;
  }
  .left {
    left: -60px;
    text-align: right;
    img {
      transform: rotate(180deg);
      margin: 0 10px 0 auto;
      height: 28px;
    }
  }
  .right {
    right: -60px;
    img {
      margin: 0 auto 0 10px;
      height: 28px;
    }
  }
  .frames {
    position: absolute;
    bottom: 50px;
    display: flex;
    list-style: none;
    padding: 0;
    margin: auto;
    width: calc(100% - 100px);
    justify-content: center;
    li {
      width: 35px;
      height: 35px;
      border: 2px solid #005494;
      border-radius: 50%;
      display: flex;
      margin: 0 10px;
      justify-content: center;
      align-items: center
    }
  }
  `


export class Slider extends Component {

  state = {
    currSlide: 0,
    slides: []
  }

  changeSlide = (move) => {
    let limit = this.state.slides.length - 1;

    let right = move === 1 && 'right';

    let currSlide = this.state.currSlide + move;

    if (currSlide > limit) {
      currSlide = 0
    } else if (currSlide < 0) {
      currSlide = limit;
    }

    this.setState({currSlide});

  };

  _moveBack = () => {
    this.changeSlide(-1)
  };

  _moveForward = () => {
    this.changeSlide(1)
  };

  componentDidUpdate(){
    console.log(this.state)
  }
  render() {
    return (

      <SliderStyled>
        <div className='left' onClick={this._moveBack}><img src='/images/icon_arrow.png' alt='' /></div>
        <div className='right' onClick={this._moveForward}><img src='/images/icon_arrow.png' alt='' /></div>
        <div className='column'>
          <div className='title'>В чем причина ухудшения зрения?</div>
          <div className='text'>Любой свет, особенно интенсивный искусственный, повреждает глаза. Световые лучи, проходя сквозь глаз, фокусируются на сетчатке в области желтого пятна - особой области, которая отвечает за максимальную остроту зрения</div>
        </div>
        <div className='column'>
          <img src='/images/slider_glaz.png' alt='' />
        </div>
        <ul className='frames'>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </SliderStyled>

    )
  }
} 