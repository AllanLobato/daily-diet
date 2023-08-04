import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { UsersThree } from "phosphor-react-native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 49px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-color: ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;
  border-width: 1px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 12px;
`;

export const Status = styled.View`
  width: 14px;
  height: 14px;
  border-radius: 14px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_MID};
  margin-right: 20px;
`;

export const Title = styled.Text`
margin-left: 20px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;



export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
  weight: "fill",
}))`
  margin-right: 20px;
`;
