import * as React from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from '@emotion/react'

import global from '../styles/global'
import theme from '../styles/theme'

interface LayoutRootProps {
  className?: string
}

const LayoutRoot: React.FC<LayoutRootProps> = ({ children, className }) => (
  <ThemeProvider theme={theme}>
    <Global styles={global} />
    {children}
  </ThemeProvider>
)

export default LayoutRoot
