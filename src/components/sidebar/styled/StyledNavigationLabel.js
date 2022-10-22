import styled from 'styled-components';

export const StyledNavigationLabel = styled.span`
  ${({ collapsed }) => collapsed ? 'display: none;' : 'display: block;'}
`;