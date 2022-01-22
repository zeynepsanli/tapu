import styled from 'styled-components/native';
const ButtonContainer = styled.TouchableOpacity`
  margin-vertical: 10px;
  height: 50px;
  width: 85%;
  border-radius: 12px;
  padding: 12px;
  background-color: ${props => props.bgColor};
  align-self: center;
  align-Items: center;
  justify-content: center;
  borderWidth: 1px;
  borderColor: ${props => props.borderColor};
`;
const ButtonText = styled.Text`
  text-align: center;
  font-size: 14px;
  color: ${props => props.textColor};
`;


export { ButtonContainer, ButtonText, }