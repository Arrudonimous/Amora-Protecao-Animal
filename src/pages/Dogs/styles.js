import styled from "styled-components/native";

export const DogsContainter = styled.ScrollView`
  margin-left: 16px;
  margin-top: 40px;
  margin-right: 16px;
`

export const DogsTitle = styled.Text`
  font-size: 32px;
  font-family: 'Poppins_700Bold';
  color: #091C1A;
`

export const DogsItalic = styled.Text`
  font-size: 32px;
  font-family: 'Poppins_500Medium_Italic';
  color: #091C1A;
`

export const DogsSubtitleContainer = styled.View`
  background-color: rgba(9, 28, 26, 0.8);
  width: 100%;
  padding: 16px;
  margin-top: 24px;
  margin-bottom: 12px;
`

export const DogsSubtitleText = styled.Text`
  color: #A1D683;
  font-size: 24px;
  font-family: 'Poppins_400Regular_Italic';
  
`

export const DogsContentText = styled.Text`
  font-size: 24px;
  font-family: 'Poppins_400Regular';
  margin-bottom: 12px;
  color: #091C1A;
`

export const LocateDogsButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  margin-bottom: 24px;
`

export const LocateDogsButtonText = styled.Text`
  font-size: 24px;
  font-family: 'Poppins_400Regular';
  color: #091C1A;
  margin-left: 8px;
`

export const LocateDogsButtonTextItalic = styled.Text`
  font-size: 24px;
  font-family: 'Poppins_400Regular_Italic';
  color: #091C1A;
`
export const DogsItemsContainer = styled.View`
  width: 100%;
  background-color: #A1D683;
  border: 2px solid #091C1A;
  border-radius: 24px;
  width: 100%;
  padding: 24px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const DogItem = styled.TouchableOpacity`
  border: 1px solid #091C1A;
  border-radius: 8px;
  width: 45%;
  margin-bottom: 16px;
`

export const DogItemImage = styled.Image`
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 140px;
`

export const DogItemNameContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DogItemNameText = styled.Text`
  font-size: 12px;
  font-family: 'Poppins_400Regular';
`