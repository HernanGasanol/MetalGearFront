import React from 'react'
import styled from 'styled-components'
import NavBarDesktop from './header/NavBarDesktop';

import NavMediumDevices from './header/NavMediumDevices';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position:relative;
`;


const Layout = ({children}) => {
  return (
    <Container>
      <NavMediumDevices/>
      <NavBarDesktop/>
        {children}

    </Container>
  )
}

export default Layout