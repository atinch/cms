import {useState} from 'react';
import styled from 'styled-components';

export const Container = styled.div`
max-width: 500px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid;
width: 100%;
margin-bottom: 20px;
`;

export const HeaderContainer = styled.div`
  max-width: 480px;
  width: 100%;
  height: 20px;
  display:flex;
  margin: 0 auto;
  justify-content: space-between;
  background-color: gray;
  padding: 10px;
`

const Section = ({children, title}) => {
 const [isContentHidden, setIsContentHidden] = useState(false)
  return (
    <Container>
      <HeaderContainer>
        {title}
        <input
          type='button'
          value={isContentHidden? '-':'+'}
          onClick={()=>setIsContentHidden(!isContentHidden)}
          style={{width: 25}}
        />
      </HeaderContainer>
      {!isContentHidden && 
      <div style={{alignSelf:'baseline', padding: 10}}>
        {children}
      </div>
      }
    </Container>
  )
}

export default Section