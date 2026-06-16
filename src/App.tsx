import { Container } from './components/Container';
import { Heading } from './components/Heading';
import {CountDown} from './components/CountDown';
import {Menu} from './components/Menu';
import {Logo} from './components/Logo';
 
export function App(){
 
  return (
        <>
            <Container>
                <Logo />
            </Container>
           
            <Container>
                <Menu/>
            </Container>
 
             <Container>
                 <CountDown/>
             </Container>
 
            <Container>
                <Heading>FOOTER</Heading>
            </Container>
   
        </>
  );
}