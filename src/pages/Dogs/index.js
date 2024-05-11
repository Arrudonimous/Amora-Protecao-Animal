import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { DogsContainter, 
  DogsTitle, 
  DogsItalic, 
  DogsSubtitleContainer, 
  DogsSubtitleText, 
  LocateDogsButton, 
  LocateDogsButtonText, 
  LocateDogsButtonTextItalic, 
  DogsItemsContainer, 
  DogItem, 
  DogItemImage, 
  DogItemNameContainer, 
  DogItemNameText 
} from "./styles";
import DogInfoItem from '../../components/DogInfoItem';
import { SafeAreaViewComponent } from '../../styles';
import Header from '../../components/Header';

export default function Dogs() {
  const [isDogItemOpened, setIsDogItemOpened] = useState(false)
  const [dogItemOpened, setDogItemOpened] = useState({})

  let dogsItems = [
    {
      name: 'Rodriguinho',
      race: 'Vira Lata',
      age: 2,
      vacinated: true,
      weight: 3,
      gender: 'M',
      uri: require('../../../assets/RodriguinhoImage.png')
    },
    {
      name: 'Melo',
      race: 'Vira Lata',
      age: 2,
      vacinated: true,
      weight: 3,
      gender: 'M',
      uri: require('../../../assets/MeloImage.png')
    },
    {
      name: 'Morcega',
      race: 'Vira Lata',
      age: 2,
      vacinated: true,
      weight: 3,
      gender: 'W',
      uri: require('../../../assets/MorcegaImage.png')
    },
    {
      name: 'Fofao',
      race: 'Vira Lata',
      age: 2,
      vacinated: true,
      weight: 3,
      gender: 'M',
      uri: require('../../../assets/FofaoImage.png')
    },
    {
      name: 'Rodriguinho',
      race: 'Vira Lata',
      age: 2,
      vacinated: true,
      weight: 3,
      gender: 'M',
      uri: require('../../../assets/RodriguinhoImage.png')
    },
    {
      name: 'Melo',
      race: 'Vira Lata',
      age: 2,
      vacinated: true,
      weight: 3,
      gender: 'M',
      uri: require('../../../assets/MeloImage.png')
    },
    {
      name: 'Morcega',
      race: 'Vira Lata',
      age: 2,
      vacinated: true,
      weight: 3,
      gender: '@',
      uri: require('../../../assets/MorcegaImage.png')
    },
    {
      name: 'Fofao',
      race: 'Vira Lata',
      age: 2,
      vacinated: true,
      weight: 3,
      gender: 'M',
      uri: require('../../../assets/FofaoImage.png')
    },
  ]

  const handleOpenDogItem = (dogIndex) => {
    setDogItemOpened(dogsItems.find((_, index) => index === dogIndex))
    setIsDogItemOpened(!isDogItemOpened)
  }

  return (
    <SafeAreaViewComponent>
      <Header />
      <DogsContainter>
        <DogsTitle>Conheça nossos <DogsItalic>Dogs</DogsItalic></DogsTitle>
        <DogsSubtitleContainer>
          <DogsSubtitleText>
            Compartilhe Amor, Dê um Lar, Adote, Não Compre!
          </DogsSubtitleText>
        </DogsSubtitleContainer>
        <LocateDogsButton>
          <Feather name="map-pin" size={24} color="#091C1A" />
          <LocateDogsButtonText>Localizar </LocateDogsButtonText>
          <LocateDogsButtonTextItalic>Dogs</LocateDogsButtonTextItalic>
        </LocateDogsButton>
        {!isDogItemOpened ? (
          <DogsItemsContainer>
            {dogsItems.map((dogItem, index) => (
              <DogItem key={index} onPress={() => handleOpenDogItem(index)}>
                <DogItemImage
                  source={dogItem.uri}
                />
                <DogItemNameContainer>
                  <DogItemNameText>{dogItem.name}</DogItemNameText>
                </DogItemNameContainer>
              </DogItem>
            ))}
          </DogsItemsContainer>
        ) : (
            <DogInfoItem dogObject={dogItemOpened} onClose={() => setIsDogItemOpened(false)}/>
        )}
      </DogsContainter>
    </SafeAreaViewComponent>
  )
}