import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components'
import ReactDOM from 'react-dom';

const Animation = keyframes`
  from {
	transform: translateY(-200px);
	opacity:0
  }

  to {
	transform: translateY(0);
	opacity:1
  }
`;

const ModalStyled = styled.div`
	.container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: #1a3141ad;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 20
	}
	.body {
		opacity:0;
		animation: ${Animation} .2s ease 1;
		animation-fill-mode: forwards;
		min-width: 320px;
		background-color: white;
		border-radius: 5px;
		padding: 25px;
		box-sizing: border-box;
	}
`


export default class Modal extends Component {
	render() {
		return ReactDOM.createPortal(
			<ModalStyled>{this.props.children}</ModalStyled>,
			document.getElementById('root')
		);
	}
}