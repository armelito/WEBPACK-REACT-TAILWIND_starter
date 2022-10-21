import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledNavigationLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 50px;
  text-decoration: none;
  color: inherit;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: #f3f3f3;
  }

  ${({ active }) => active && 'background-color: #e2eef9;'}
`;