import React from 'react'
import styled from 'styled-components'
import {devices} from '../../../responsive';
import konami from '../../img/konami.png'
import {AiOutlineDoubleLeft, AiOutlineSearch} from 'react-icons/ai'


const Container = styled.div`
 display:flex;
 position:fixed;
 width:100%;
 align-items:center; 
justify-content:space-between ;
 height: 50px;
 
top:8px;
 z-index:6;

 
 
 @media ${devices.mobileL} {

    display:none;
  }
  @media ${devices.tablet} {
   
    display:none;
  }
`;


const ContainerLogo = styled.div`
   width:150px;
   height:70%;
   padding-left:20px;
   
`;

const ImageLogo = styled.img`
  width: 100%;
  height: 100%;
  
`;


const Nav = styled.nav`
 
 width:max-content;
 display:flex ;
 flex-direction:column;
 top:0 ;
 align-items:center ;
 justify-content:space-between;
 position:fixed;
 z-index:10 ;
  right:10px ;
  height:100vh;

`;

const ListUlContainer = styled.ul`

  width:max-content ;
   position:relative;
   top:20px;
  width:100%;
  height:90%;
  display:flex ;
   &:hover{
     .list-items{
        transform:translateX(0px) ;
      
     }
   }

`;


const ListItem = styled.li`
  list-style:none;  
 position:relative;
  top:50px;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column ;
  gap:60px;
  transition:2s ease-in;
  transform :translateX(200px);
  opacity:1 ;

  width:100%;



`;


const ListItemAnchor = styled.a`
  color:white;
  font-weight:700 ;
  padding-left:20px ;
  padding-top:10px ;
  padding-bottom:10px ;
  font-size:1.2rem;
  width: 100%;
  &:hover{
    background-color:white;
    color:black;
    
  }

`;



const SearchIconContainer = styled.div`
  position:absolute;
  width:max-content;

  justify-content:space-between ;
  display:flex;
  color:white ;
  gap:15px ;
  right:20px;
  top:  15px;
  font-size:1.2rem;
  &:hover{
    .input{
      opacity:1 ;
      width:100%;
    }
  }
`;




const Input = styled.input`
  background-color:transparent ;
  border:1px solid white ;
  outline:none ;
  color:white ;
  transition:2s ease;
  opacity:0 ;
  
  width:0;
`;

const GlassBackground = styled.div`
  
  position:absolute;
  height: 100%;
  backdrop-filter:blur(50px) ;
  top:0 ;
  width: 100%;

  
z-index:-5 ;
  
  backdrop-filter:blur(50px) ;
  `;



const NavBarDesktop = () => {
  
  const items=['inicio', 'story' , 'games','inicio', 'story' ]
  
  
    return (
    <Container>
       
        <ContainerLogo><ImageLogo src={konami}/></ContainerLogo>
       
       
       
       
        <Nav>
             
             <SearchIconContainer><Input className='input' placeholder='search...' name='search' /><AiOutlineSearch /></SearchIconContainer>
             
             <ListUlContainer>          
              <ListItem className='list-items'> 
             
            
  
                 {items.map(item=> (
              <ListItemAnchor >{item}</ListItemAnchor>
               ))}

              </ListItem>

              </ListUlContainer>    

              <GlassBackground></GlassBackground>

        </Nav>
    </Container>
  )
}

export default NavBarDesktop