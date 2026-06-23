import { Container } from './components/Container';
import { Heading } from './components/Heading';
import {CountDown} from './components/CountDown';
import {Menu} from './components/Menu';
import {Logo} from './components/Logo';
import { DefaultInput } from './components/DefaultInput'; 
<DefaultInput
labelText='Task'
id="myInput"
type='text'
/>

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

            <Container>
    <CountDown />
</Container>

<Container>
    <form className="form" action="">
        <div className="formRow">
            <DefaultInput type="number" id="focus" value={25}>
        Foco (min):
        </DefaultInput>
        </div>

        <div className="formRow">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="formRow">
            <p>Ciclos</p>
            <p>0 0 0 0 0 0</p>
        </div>

        <div className="formRow">
            <button type="submit">Add Task</button>
        </div>
    </form>
</Container>


        </>
  );
}