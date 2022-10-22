import styled from 'styled-components'

export const StyledSubNavigation = styled.li`
  position: relative;
  width: 100%;

  ${({ navigationItemStyles }) => navigationItemStyles};
`;