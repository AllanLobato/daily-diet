import styled  from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";

export const Container = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    `;

export const Logo = styled.Image`
    width: 82px;
    height: 37px;
    `;

export const Avatar = styled.Image`
    width: 40px;
    height: 40px;
    `;

export const BackButton = styled.TouchableOpacity`
    flex: 1;
`;

export const Title = styled.Text`
    color: #000;
    font-size: 32px;
    `;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
    color: theme.COLORS.GRAY_700,
    size: 32
}))``;
