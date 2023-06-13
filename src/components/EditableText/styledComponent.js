import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5d0fe;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 25px;
  min-width: fit-content;
  border-radius: 10px;
`
export const Title = styled.h1`
  font-size: 18px;
  color: #000000;
  font-weight: 700;
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Input = styled.input`
  height: 28px;
  border: 1px solid #cbd2d9;
  color: #323f4b;
  font-size: 14px;
`
export const InputValue = styled.p`
  color: #323f4b;
  font-size: 16px;
  margin-right: 20px;
`
export const Button = styled.button`
  width: 60px;
  color: #ffffff;
  background-color: #d946ef;
  border: none;
  border-radius: 2px;
  font-size: 16px;
  padding: 4px;
  margin-left: 3px;
`
