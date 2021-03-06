import React from 'react'
import styled from 'styled-components'

const SubmitButton = ({title}) => {
  return (
    <Button type="submit">{title}</Button>
  )  
}

const Button = styled.button`
  background-color: #234465;
  color: white;
  padding: 1%;
  width: auto;
  border-radius: 6px;
  display: block;
  margin: 0 auto;
  border:none;
  margin-top: 0.5%;
  border: 2px solid white;
  margin-bottom: 2%;

&:hover{
  background-color: white;
  border: 2px solid #234465;
  color: #234465;
  font-style: italic;
}
`


export default SubmitButton