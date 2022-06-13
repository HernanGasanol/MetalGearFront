import React from 'react'

import Nav from './NavMediumDevices'
import konami from "../../img/konami.png";
import styled from 'styled-components';
import TextContainer from './Center';
import { FaCentercode } from 'react-icons/fa';
import Center from './Center';
import NavMediumDevices from './NavMediumDevices';



const Container = styled.header`
  width: 100%;
  height:100vh;
  max-height:100vh;
`;

const Header = () => {

  
  return (
    <Container>
        <NavMediumDevices logo={konami}/>
        

        <Center/>   
    </Container>
  )
}

export default Header