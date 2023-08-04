import React from "react";
import { Container, Name, Icon } from "./styles";
import { TouchableOpacity } from "react-native";

type Props = {
    percentual: string;  
}

export function InfoCard({ name }: Props) {
    return (
        <TouchableOpacity>
        <Container>
            <Icon 
                name="person"
            />

            <Name>{name}</Name>
        </Container>
        </TouchableOpacity>
    );
}