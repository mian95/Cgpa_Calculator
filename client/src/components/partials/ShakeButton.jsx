import React from "react";
import styled from "styled-components";

const ShakeButton = ({ icon, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <StyledButton className="bg-gray-50 dark:bg-gray-700">{icon}</StyledButton>
    </a>
  );
};

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition-duration: 0.3s;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.13);
  border: none;
  color: white;

  &:hover {
    background-color: ;
  }

  &:hover svg {
    animation: bellRing 0.9s both;
  }

  &:active {
    transform: scale(0.8);
  }

  /* Bell ringing animation */
  @keyframes bellRing {
    0%,
    100% {
      transform-origin: top;
    }

    15% {
      transform: rotateZ(10deg);
    }

    30% {
      transform: rotateZ(-10deg);
    }

    45% {
      transform: rotateZ(5deg);
    }

    60% {
      transform: rotateZ(-5deg);
    }

    75% {
      transform: rotateZ(2deg);
    }
  }
`;

export default ShakeButton;
