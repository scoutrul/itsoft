import React from 'react';
import styled from 'styled-components'

const FormStyled = styled.form`
display: flex;
flex-flow: column nowrap;
input,textarea {
  display: block;
  width: 100%;
  margin: 10px 0

}
`

const Form = () => {
  return (
    <FormStyled>
      <label>
        Имя
        <input type='text' required/>
      </label>
      <label>
        Email
        <input type='text' pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" required/>
      </label>
      <label>
        Телефон
        <input type="tel" pattern="^[0-9\-\+\s\(\)]*$" required/>
      </label>
      <label>
        Ваш вопрос
        <textarea required/>
      </label>
      <input type="submit" value="Отправить" />
    </FormStyled>
  )
}

export default Form