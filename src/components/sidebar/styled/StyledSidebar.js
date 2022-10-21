import styled from 'styled-components'

export const StyledSidebar = styled.aside`
  width: ${({ width, collapsed, collapsedWidth }) => (collapsed ? collapsedWidth : width)}
  min-width: ${({ width, collapsed, collapsedWidth }) => (collapsed ? collapsedWidth : width)}
  transition: ${({ transitionDuration }) => `width, left, right, ${transitionDuration}ms`}
`;