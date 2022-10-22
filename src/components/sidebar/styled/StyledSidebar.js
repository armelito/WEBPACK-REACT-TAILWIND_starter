import styled from 'styled-components'

export const StyledSidebar = styled.aside`
  width: ${({ width, collapsed, collapsedWidth }) => (collapsed ? `calc(100vw / 1440 * ${collapsedWidth})` : `calc(100vw / 1440 * ${width})`)};
  min-width: ${({ width, collapsed, collapsedWidth }) => (collapsed ? `calc(100vw / 1440 * ${collapsedWidth})` : `calc(100vw / 1440 * ${width})`)};
  transition: ${({ transitionDuration }) => `width, ${transitionDuration}ms`};
`;