import React from "react";
import { Container, Logo, BackIcon, BackButton } from "./styles";
import { useNavigation } from "@react-navigation/native";

import logoImg from "@assets/Logo.svg";


type Props = {
    showBackButton?: boolean;
}

export function HeaderWithIcon({ showBackButton = false}: Props) {
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.navigate('creation');
    }
    
    return (
        <Container>
            {showBackButton && 
            <BackButton onPress={handleGoBack} >
            <BackIcon />
            </BackButton>
            }


            <Logo source={logoImg} />
        </Container>
    );
}