import styled from 'styled-components'

export const StyledExpandIcon = styled.figure`
  display: inline-block;
  transition: transform 0.3s;
  transform: rotate(${({ open }) => (open ? '-135deg' : '-45deg')});
`;