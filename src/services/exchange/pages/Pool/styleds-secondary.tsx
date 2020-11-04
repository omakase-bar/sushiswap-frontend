import { Text } from "rebass";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const ClickableText = styled(Text)`
  :hover {
    cursor: pointer;
  }
  color: ${({ theme }) => theme.primary1};
`;
export const MaxButton = styled.button<{ width: string }>`
  width: 25%;
  padding: 0.5rem 1rem;
  background-color: #ffeedc;
  border: 1px solid #ffeedc;
  border-radius: 0.375rem;
  font-size: 1rem;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 0.25rem 0.5rem;
  `};
  font-weight: 500;
  cursor: pointer;
  margin: 0.25rem;
  overflow: hidden;
  color: #374151;
  :hover {
    border: 1px solid #fcd9be;
  }
  :focus {
    border: 1px solid #fcd9be;
    outline: none;
  }
`;

export const Dots = styled.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: ".";
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: ".";
    }
    33% {
      content: "..";
    }
    66% {
      content: "...";
    }
  }
`;
