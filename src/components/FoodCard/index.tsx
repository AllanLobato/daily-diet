import { TouchableOpacityProps } from 'react-native';
import { Container, Icon, Title, Status } from './styles';
import React from 'react';

type Props = TouchableOpacityProps & {
    hour: string;
    description: string;
}

export function FoodCard({ hour, description, ...rest }: Props){
    return(
        <Container {...rest}>
            <Title>{hour}</Title>
            <Title>{description}</Title>
            <Status />
        </Container>

    );
}