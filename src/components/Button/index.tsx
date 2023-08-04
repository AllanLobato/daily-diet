import { TouchableOpacityProps } from "react-native/Libraries/Components/Touchable/TouchableOpacity";

import { Container, Title, } from "./styles";
import React from "react";

type Props = TouchableOpacityProps & {
    title: string;
}

export function Button({ title }: Props) {
    return (
        <Container>
            <Title>{title}</Title>
        </Container>
    );
}