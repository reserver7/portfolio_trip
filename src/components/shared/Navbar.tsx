import { colors } from '@/styles/colorPalette'
import { css } from '@emotion/react'
import Button from '@shared/Button'
import Flex from '@shared/Flex'
import { useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  const showSignButton =
    ['/signup', '/signin'].includes(location.pathname) === false

  // @TODO
  const user = null

  const renderButton = useCallback(() => {
    if (user != null) {
      return (
        <Link to="my">
          {/* @TODO */}
          <img src="" alt="" />
        </Link>
      )
    }

    if (showSignButton) {
      return (
        <Link to="/signin">
          <Button>로그인/회원가입</Button>
        </Link>
      )
    }

    return null
  }, [user, showSignButton])

  return (
    <Flex justify="space-between" align="center" css={navbarContainerStyles}>
      <Link to="/" style={{ width: '80px', transform: 'translateX(-25px)' }}>
        <img
          width="100%"
          src="https://framerusercontent.com/images/y7135TGP0TiQ7gtLbQ0IrWOzww.jpg?lossless=1"
          alt=""
        />
      </Link>
      {renderButton()}
    </Flex>
  )
}

const navbarContainerStyles = css`
  padding: 10px 24px;
  position: sticky;
  top: 0;
  background-color: ${colors.white};
  z-index: 10;
  border-bottom: 1px solid ${colors.gray};
`

export default Navbar
