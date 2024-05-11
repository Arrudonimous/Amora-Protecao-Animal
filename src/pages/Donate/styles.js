import styled from "styled-components/native";

export const DonateContainter = styled.ScrollView`
  margin-left: 16px;
  margin-top: 40px;
  margin-right: 16px;
`

export const DonateTitle = styled.Text`
  font-size: 32px;
  font-family: 'Poppins_700Bold';
  color: #091C1A;
`

export const DonateDogsImage = styled.Image`
  border-radius: 24px;
  width: 100%;
  margin-top: 24px;
  margin-bottom: 32px;
`

export const DonateForm = styled.View`
  width: 100%;
  background-color: #A1D683;
  border: 2px solid #091C1A;
  border-radius: 24px;
  padding: 24px;
`

export const DonateFormLabel = styled.Text`
  color: #091C1A;
  font-size: 20px;
  font-family: 'Poppins_700Bold';
  margin-bottom: 12px;
`


export const DonateFormInput = styled.TextInput`
  width: 100%;
  border-radius: 4px;
  padding: 12px 7px;
  background-color: #D9D9D9;
  font-family: 'Poppins_500Medium';
  margin-bottom: 12px;
`

export const DonateFormSubmitRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const DonateFormSubmitButton = styled.TouchableOpacity`
  background-color: #091C1A;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 32px;
  border-radius: 4px;
`

export const DonateFormSubmitText = styled.Text`
  color: white;
  font-size: 12px;
  font-family: 'Poppins_700Bold';
`
