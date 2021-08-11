import * as React from 'react'
import { Link } from 'gatsby'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <div>
    <h1>
      <Link to="/">{title}</Link>
    </h1>
  </div>
)

export default Header
