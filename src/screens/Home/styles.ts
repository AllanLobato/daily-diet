import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { css } from "styled-components";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;
`;

export const ContainerFlatList = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const InfoPercentual = styled.View`
  flex: auto;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 102px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_DARK};
  border-radius: 8px;

  margin-top: 36px;
  margin-bottom: 40px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXXL}px;
  `};
`;

export const SubTitle = styled.Text`
  padding-bottom: 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.XL}px;
  `};
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_700,
}))`
  margin-left: 16px;
  margin-right: 4px;
`;

export const HeaderList = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;

    margin: 32px 0 12px;
`;
