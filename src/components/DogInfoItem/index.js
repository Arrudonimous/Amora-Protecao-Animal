import { View } from "react-native";
import { 
  DogInfoColLeft, 
  DogInfoColRight, 
  DogInfoContainer, 
  DogInfoHeader, 
  DogInfoLabel, 
  DogInfoName, 
  DogInfoRow, 
  DogInfoRowRight, 
  DogInfoValue, 
  DogItemContainer, 
  DogItemImage 
} from "./styles";
import { AntDesign } from '@expo/vector-icons';

export default function DogInfoItem({ dogObject, onClose }){
  return (
    <DogItemContainer>
      <DogInfoHeader>
        <DogInfoName>
          {dogObject.name}
        </DogInfoName>
        <AntDesign name="back" size={24} color="black" onPress={onClose}/>
      </DogInfoHeader>
      <DogItemImage source={dogObject.uri}/>
      <DogInfoContainer>
        <DogInfoColLeft>
          <DogInfoRow>
            <DogInfoLabel>
              Raça :
            </DogInfoLabel>
            <DogInfoValue>
              {dogObject.race}
            </DogInfoValue>
          </DogInfoRow>
          <DogInfoRow>
            <DogInfoLabel>
              Idade :
            </DogInfoLabel>
            <DogInfoValue>
              {dogObject.age} anos
            </DogInfoValue>
          </DogInfoRow>
        </DogInfoColLeft>

        <DogInfoColRight>
          <DogInfoRowRight>
            <DogInfoLabel>
              Peso :
            </DogInfoLabel>
            <DogInfoValue>
              {dogObject.weight}Kg
            </DogInfoValue>
          </DogInfoRowRight>
          <DogInfoRowRight>
            <DogInfoLabel>
              {dogObject.gender === 'W' ? 'Vacinada' : 'Vacinado'} :
            </DogInfoLabel>
            <DogInfoValue>
              {dogObject.vacinated ? 'Sim' : 'Não'}
            </DogInfoValue>
          </DogInfoRowRight>
        </DogInfoColRight>
      </DogInfoContainer>
    </DogItemContainer>
  )
}