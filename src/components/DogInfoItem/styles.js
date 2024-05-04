import styled from "styled-components/native";

export const DogItemContainer = styled.View`
  width: 100%;
  background-color: #A1D683;
  border: 2px solid #091C1A;
  border-radius: 24px;
  width: 100%;
  padding: 24px;
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const DogItemImage = styled.Image`
  width: 90%;
  border-radius: 8px;
  height: 250px;
  margin-top: 12px;
`

export const DogInfoHeader = styled.View`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const DogInfoName = styled.Text`
  font-size: 32px;
`

export const DogInfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin-top: 8px;
`

export const DogInfoRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

export const DogInfoRowRight = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`

export const DogInfoColLeft = styled.View`
  display: flex;
  flex-direction: column;
`

export const DogInfoColRight = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: end;
`

export const DogInfoLabel = styled.Text`
  font-size: 20px;
  font-family: 'Poppins_700Bold';
`

export const DogInfoValue = styled.Text`
  font-size: 16px;
  font-family: 'Poppins_500Medium';
`