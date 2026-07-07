import { DefaultButton } from './components/DefaultButton';
import { Icon, PauseCircleIcon, PlayCircle, PlayCircleIcon } from 'lucide-react';
import { Container } from './components/Container';
import { Heading } from './components/Heading';
import {CountDown} from './components/CountDown';
import {Menu} from './components/Menu';
import {Logo} from './components/Logo';
import { DefaultInput } from './components/DefaultInput'; 
import { Cycles } from './components/Cycles';
import { useState } from 'react';
import { Footer } from './components/Footer';

type CycleType = 'work'| 'short'| 'long';
const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutos em segundos
const [isRunning, setIsRunning] = useState(false);
const [currentType, setCurrentType] = useState<CycleType>('work');
const [completedCycles, setCompletedCycles] = useState(0);
const [task, setTask] = useState('');

<DefaultInput
labelText='Task'
id="myInput"
type='text'
placeholder='Enter your task'
required    
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

        <DefaultButton
        icon={<PauseCircleIcon/>}
        color="red"
        disabled={isRunning}
        />

        <div className="formRow">
            <button type="submit">Add Task</button>
        </div>
    </form>
        <div className='formRow'>
        <Cycles></Cycles>
        </div>
</Container>


        </>
  );
}