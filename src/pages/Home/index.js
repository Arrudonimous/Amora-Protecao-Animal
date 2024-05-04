import { HomeContainter, HomeTitle, HomeContentText, DogImage, DogImageContainer } from "./styles";

export default function Home(){
  return (
    <HomeContainter>
      <HomeTitle>Salve Vidas</HomeTitle>
      <DogImageContainer>
        <DogImage source={require('../../../assets/CachorroHome.png')} />
      </DogImageContainer>
      <HomeContentText>
        Você pode ajudar de várias formas além da doação em dinheiro.
      </HomeContentText>
      <HomeContentText>
        Junte-se a nós e transforme vidas.
      </HomeContentText>
    </HomeContainter>
  )
}