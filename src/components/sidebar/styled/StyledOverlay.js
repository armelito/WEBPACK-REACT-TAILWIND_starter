import React from 'react'
import styled from 'styled-components'

const StyledOverlay = styled.div`
position: fixed;
top: 0px;
right: 0px;
bottom: 0px;
left: 0px;
background-color: ${({ overlayColor }) => overlayColor};
z-index: 1;
`;

export const Overlay = ({ onOverlayClick, overlayColor }) => 
{
  return (
    <StyledOverlay
      className="overlay"
      onClick={onOverlayClick}
      onKeyPress={onOverlayClick}
      role="button"
      tabIndex={0}
      aria-label="overlay"
      overlayColor={overlayColor}
    />
  );
};