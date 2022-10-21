import styled from 'styled-components'

export const StyledNavigationItem = styled.li`
  display: inline-block;
  width: 100%;

  ${({ navigationItemStyles }) => navigationItemStyles};
`