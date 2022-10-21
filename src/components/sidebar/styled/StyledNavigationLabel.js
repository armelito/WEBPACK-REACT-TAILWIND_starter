import styled from 'styled-components';

export const StyledNavigationLabel = styled.span`
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${({ collapsed }) => collapsed ? 'display: none;' : 'display: block;'}
`;