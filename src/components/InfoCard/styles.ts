import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { css } from "styled-components";

export const Container = styled.View`
    width: 100%;
    height: 102px;

    background-color: ${({ theme }) => theme.COLORS.GREEN_DARK};

    border-radius: 8px;

    flex-direction: row;
    align-items: center;

    margin-top: 36px;
    margin-bottom: 40px;
`;

export const Name = styled.Text`
    flex: 1;

    ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GRAY_200
}))`
    margin-left: 16px;
    margin-right: 4px;
`