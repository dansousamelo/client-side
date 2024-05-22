import { GenericPage } from '../../components/GenericPage'
import * as S from './styles' 
import { PrimaryButton } from '../../components/PrimaryButton'

export function HomePage() {
  return (
    <>
      <GenericPage.Root>
        <S.Header>

          <S.WrapperLogoAndLogoTitle>
            <GenericPage.Logo />
            <GenericPage.LogoTitle>DataMed</GenericPage.LogoTitle>
          </S.WrapperLogoAndLogoTitle>

          <S.ButtonsAndProfile>
            <S.ProfileCircle>
              <p>A</p>
            </S.ProfileCircle>
            <PrimaryButton>Paciente</PrimaryButton>
            <PrimaryButton
              variant="secondary"
            >
              Sair
            </PrimaryButton>
          </S.ButtonsAndProfile>
        </S.Header>

        <GenericPage.Divider/>
        <S.MainContent>
          <S.WelcomeText>Bem vinda de volta, Ana!</S.WelcomeText>
          <S.WelcomeQuestion>O que deseja acessar hoje?</S.WelcomeQuestion>

          <S.Options>
            <S.HomepageOption>
              <S.OptionTitle>Gerenciar Exames</S.OptionTitle>
              <S.OptionDescription>Envie seus exames e extraia seus dados de saúde.</S.OptionDescription>
              <S.ImageWrapper>
                
                <S.Image src="src/pages/HomePage/assets/BlueCircleAndDoctor.png" />

                
              </S.ImageWrapper>
            </S.HomepageOption>

            <S.HomepageOption>
              <S.OptionTitle>Gerenciar Pacientes</S.OptionTitle>
              <S.OptionDescription>Adicione e gerencie os exames do seu paciente.</S.OptionDescription>
              <S.ImageWrapper>
                
                <S.Image src="src/pages/HomePage/assets/BlueCircleAndExam.png" />

                
              </S.ImageWrapper>
            </S.HomepageOption>
          </S.Options>
        </S.MainContent>
        
      </GenericPage.Root>
      
    
    </>


  )
}
