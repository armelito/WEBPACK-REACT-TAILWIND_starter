import styled from 'styled-components'
import { Link } from 'react-router-dom'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../../tailwind.config.cjs'

const { theme } = resolveConfig(tailwindConfig)

export const StyledNavigationLink = styled(Link)`
  &:hover {
    background-color: ${theme.colors.dark[3]};
  }

  ${({ active }) => active && 'background-color: #e2eef9;'}
`;
