import React from 'react';
import styled from 'styled-components';
import {mobile} from '../responsive';
import Facebook from '@material-ui/icons/Facebook'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import{
   
    Instagram,
  
    Phone,
    Pinterest,
    Room,
    Twitter
} from  '@material-ui/icons';

        const Container=styled.div`
        display :flex;
        ${mobile({flexDirection:"column"})} `

        const Left=styled.div`
        flex:1;
        display:flex;
        flex-direction:column;
        padding:20px;`;

        const Logo=styled.h1``;

        const Desc=styled.p`
        margin:20px 0px;`;

        const SocialContainer=styled.div`
        display:flex;`;

        const SocialIcon=styled.div`
        width:40px;
        height:40px;
        border: 50%;;
       
        background-color:#${(props) =>props.color};
        display:flex;
        align-items:center;
        justify-content:center;
        margin-right:20px;`;

        const Center=styled.div`
        flex:1;
        padding:20px;
        ${mobile({display:"none"})}
        `;
        const Title=styled.h3`
        margin-bottom:30px;`;

        const List=styled.ul`
        margin:0;
        padding:0;
        list-style-type: none;
        display:flex;
        flex-wrap:wrap;
        `;

        const ListItem=styled.li`
        width:50%;
        margin-bottom:10px;`;

        const Right= styled.div`
        flex:1;
        padding:20px;
        ${mobile({backgroundColor:"#ff8f8"})};`
      

        const ContactItem=styled.div`
        margin-bottom:20px;
        display:flex;
        align-items:center;`;


        const Payment=styled.img`
        width:50%;`;
        
         
function Footer(props) {
    return (
        <Container>
        <Left>
        <Logo>Myntra</Logo>
        <Desc>ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</Desc>
        <SocialContainer>
        <SocialIcon color='skyblue'>
        <Facebook/>
        </SocialIcon>

        <SocialIcon color='E440SF'>
        <Instagram/>
        </SocialIcon>

        <SocialIcon>
        <Twitter/>
        </SocialIcon>


        <SocialIcon>
        <Pinterest/>
        </SocialIcon>


        </SocialContainer>
        </Left>
        <Center>
        <Title>Useful Links
        </Title>
        <List>
        <ListItem>Home</ListItem>
        <ListItem>Cart</ListItem>
        <ListItem>Man Fashion</ListItem>
        <ListItem>Woman Fashion</ListItem>
        <ListItem>Acessiores</ListItem>
        <ListItem>My Account</ListItem>
        <ListItem>Order Tracking</ListItem>
        <ListItem>Wishlist</ListItem>
        <ListItem>Terms</ListItem>
        

        </List>
        </Center>
        <Right>
        <Title>Contact</Title>
        <ContactItem>
<Room style={{marginright:"10px",color:"blue"}}> 123,Tilak road South Pune 4111039</Room>

        </ContactItem>
        <ContactItem>
        <Phone style={{marginRight:"10px"}}>+1234567</Phone>

        </ContactItem>
        <ContactItem>
        <EmailOutlinedIcon style={{marginRight:"10px"}}>
        contact@gmail.com</EmailOutlinedIcon>
        </ContactItem>
      
        <Payment src=""/>
        
        
        
        
        </Right>
        </Container>
    );
}

export default Footer;
