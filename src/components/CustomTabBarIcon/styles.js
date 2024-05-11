import styled from "styled-components/native";

export const TabBarIconContainer = styled.View`
  padding: 8px;
  border-radius: 12px;
  background-color: ${({ focused }) => focused ? '#A1D683' : 'transparent'};
`;