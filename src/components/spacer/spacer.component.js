import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const sizeVarient = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVarient = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVarient = (position, size, theme) => {
  const sizeIndex = sizeVarient[size];
  const property = positionVarient[position];
  const value = theme.space[sizeIndex];
  return `${property}:${value}`;
};

export const Spacer = styled.View`
  ${({ position, size, theme }) => getVarient(position, size, theme)}
`;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
