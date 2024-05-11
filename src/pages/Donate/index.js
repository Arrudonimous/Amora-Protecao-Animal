import { StyleSheet } from "react-native";
import { useState } from "react";
import ToastManager, { Toast } from 'toastify-react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { 
  DonateContainter, 
  DonateDogsImage, 
  DonateForm, 
  DonateFormInput, 
  DonateFormLabel, 
  DonateFormSubmitButton, 
  DonateFormSubmitRow, 
  DonateFormSubmitText, 
  DonateTitle
} from "./styles";
import DonateImage from '../../../assets/DonateImage.png'
import Header from "../../components/Header";
import { SafeAreaViewComponent } from '../../styles';

export default function Donate() {
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = () => {
    Toast.success('Enviado');
    setName('')
    setCpf('')
    setEmail('')
    setPhone('')
  }


  return (
    <SafeAreaViewComponent>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        resetScrollToCoords={{ x: 100, y: 100 }}
        scrollEnabled={true}
        extraScrollHeight={50}
      >
        <Header />
        <DonateContainter>
          <DonateTitle>Doe agora</DonateTitle>
          <DonateDogsImage source={DonateImage} />

          <DonateForm >
            <DonateFormLabel>
              Nome :
            </DonateFormLabel>
            <DonateFormInput
              placeholder="Digite seu nome"
              placeholderTextColor='#CACACA'
              value={name}
              onChangeText={(value) => {
                setName(value)
              }}
            />
            <DonateFormLabel>
              CPF :
            </DonateFormLabel>
            <DonateFormInput
              placeholder="Digite seu cpf"
              placeholderTextColor='#CACACA'
              value={cpf}
              onChangeText={(value) => {
                setCpf(value)
              }}
            />
            <DonateFormLabel>
              E-mail :
            </DonateFormLabel>
            <DonateFormInput
              placeholder="Digite seu seu e-mail"
              placeholderTextColor='#CACACA'
              value={email}
              onChangeText={(value) => {
                setEmail(value)
              }}
            />
            <DonateFormLabel>
              Telefone :
            </DonateFormLabel>
            <DonateFormInput
              placeholder="Digite seu telefone"
              placeholderTextColor='#CACACA'
              value={phone}
              onChangeText={(value) => {
                setPhone(value)
              }}
            />
            <DonateFormSubmitRow>
              <DonateFormSubmitButton
                onPress={handleSubmit}
              >
                <DonateFormSubmitText>
                  Enviar
                </DonateFormSubmitText>
              </DonateFormSubmitButton>
            </DonateFormSubmitRow>
          </DonateForm>
          <ToastManager
            animationStyle='zoomInOut'
            positionValue={250}
          />
        </DonateContainter>
      </KeyboardAwareScrollView>
    </SafeAreaViewComponent>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  
});