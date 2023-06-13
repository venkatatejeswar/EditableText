import {Component} from 'react'
import {
  AppContainer,
  CardContainer,
  Title,
  InputContainer,
  Input,
  Button,
  InputValue,
} from './styledComponent'

class EditableText extends Component {
  state = {searchValue: '', isEditable: true}

  onChangeInput = e => {
    this.setState({searchValue: e.target.value})
  }

  onSave = () => {
    this.setState(prevState => ({isEditable: !prevState.isEditable}))
  }

  render() {
    const {searchValue, isEditable} = this.state
    return (
      <AppContainer>
        <CardContainer>
          <Title>Editable Text Input</Title>
          <InputContainer>
            {isEditable ? (
              <Input
                show={false}
                type="text"
                onChange={this.onChangeInput}
                value={searchValue}
              />
            ) : (
              <InputValue>{searchValue}</InputValue>
            )}

            <Button onClick={this.onSave}>
              {isEditable ? 'Save' : 'Edit'}
            </Button>
          </InputContainer>
        </CardContainer>
      </AppContainer>
    )
  }
}

export default EditableText
