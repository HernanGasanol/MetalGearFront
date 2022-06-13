import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components';
import {FaCuttlefish, FaPlay} from 'react-icons/fa'
import { devices } from '../../../responsive';
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {GrFacebookOption} from 'react-icons/gr'
import konami_white from '../../img/konami_white.png'




const Container = styled.div`
max-width: 100%;
height:100%;
position:relative;

background-color:black;

`;


const ContainerText = styled.div`
  
  height:100%;
  width:100%;
  background: rgb(0,0,0);
background: linear-gradient(90deg, #0000001f 15%, #000000fb 40%, rgba(0,0,0,1) 77%, rgba(0,0,0,1) 100%);
  
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:end ; 
  @media ${devices.mobileL} { 
    background: linear-gradient(90deg, #0000001f 15%, #000000fb 50%, rgba(0,0,0,1) 77%, rgba(0,0,0,1) 100%);
}

@media ${devices.tablet} { 

      background: linear-gradient(90deg, #0000001f 15%, #000000fb 50%, rgba(0,0,0,1) 77%, rgba(0,0,0,1) 100%);

  }
  
 
  
`;

const Content = styled.div`

  width: 60%;
  gap:10px ;
  display:flex;
  flex-direction:column;
  justify-content:center;
 
 @media ${devices.tablet} { 
    width:85% ;
   }
 
  
 @media ${devices. mobileL} { 
  width: 100%;
  gap:30px ;
  align-items:center ;
  }

`;

const LogoTitle = styled.img`
width:80% ;



`;
const LogoText = styled.p`
 width: 70%;
 font-size:1.5rem;
 color:white ;
 margin-bottom:80px;

 
 @media ${devices.tablet} { 
    font-size:1rem ;
    width:80% ;
   
  }

  @media ${devices.mobileL} { 
 display:none;

 }
`;


const ByAndButton = styled.div`
max-width: 100%;
 display:flex;
 max-height:4rem ;
  gap:3rem ;
  @media ${devices.tablet} { 
    gap:1.5rem ;
   
  }


`;


  const By= styled.span`
     color:hsl(0, 0%, 100%);
    font-size:1.2rem ;
    transition:2s  ease;
 @media ${devices.mobileL} { 
    font-size:4rem;
  }
  
  @media ${devices.tablet} { 
     font-size:1.2rem ;
   
  }
  
  `;


const Button = styled.button`
  border-radius:100%;
  align-self:end;
  height:4.5vw;
  border:1px solid white; 
  width: 4.5vw;
  background-color:transparent;
  font-size:1.2vw ;
  color:hsl(0, 0%, 100%);
  transition:2s  ease;
  &:hover{
    box-shadow:1px 1px 20px ;
   
  }

  
 


  @media ${devices.tablet} { 
     font-size:1rem ;
     height:3rem;
     width: 3rem;
   
  }

  `;


const MoveBackGround = keyframes`
  100%{
    background-position:-500px;
  }
`;


const WallpaperContainer = styled.div`
 width: 100%;
 height: 100%;
 display:flex;
 justify-content:center ;
 align-items:center ;
background-repeat:no-repeat ;
background-attachment:fixed;
background-size:contain ;
background-image:url('https://i.ibb.co/19xFHFZ/wallpapersnake.jpg') ;
 animation-name:${MoveBackGround};
 animation-iteration-count: infinite;

 @media ${devices.mobileL} { 
      background-size:cover ;

  }
  @media ${devices.tablet} { 
      background-size:cover ;
  }


`;


const BorderContainer = styled.div`
width:4%;
/* border:0.5px solid hsl(0, 0%, 80%); */
height:max-content;
position:absolute;
display:flex;
justify-content:center;

z-index:4 ;
top:10;
bottom:20px ;
left:5px ;
right:50px ;
&:Hover{
  .container{
      backdrop-filter:blur(20px) ;
    }
}
color:white;

`;

const ContainerIconsSocials = styled.div`
 display:flex;
  width:100%;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:max-content;
  align-self:end;
  gap:10px ;
  

`;
const AnchorIcon = styled.a`
  color:white ;
  font-size:1.5rem ;
   
 @media ${devices.mobileL} { 
  font-size:1rem ;


   
  }
  @media ${devices.tablet} { 
 
  }

`;


const Center = () => {
  
  const icons=[
    <AiOutlineTwitter/>,
    <AiOutlineInstagram/>,
    <GrFacebookOption/>
  ]
  
  
  return (
    <Container>
      <WallpaperContainer  >
       
        
      
        <ContainerText>
         
         <Content> 
          <LogoTitle src="https://www.pngplay.com/wp-content/uploads/11/Metal-Gear-Solid-Logo-Background-PNG-Clip-Art.png" />

          <LogoText>
            game design, web design, graphic design, battlefield
          </LogoText>
          <ByAndButton>
          <By> —Hideo Kojima</By>
          <Button>
            <FaPlay style={{ color: "white" }} />
          </Button>
           
            </ByAndButton>
         

         
          </Content>
        </ContainerText>
     
        <BorderContainer className="container">

              
    
             
              <ContainerIconsSocials>
                  {icons.map(item => (
                    <AnchorIcon>{item}</AnchorIcon>
                  ))}
              </ContainerIconsSocials>
         

        </BorderContainer>
          
      </WallpaperContainer>
    </Container>
  );
};

export default Center