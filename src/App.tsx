import { DefaultButton } from './components/DefaultButton';
import { Icon, PauseCircleIcon, PlayCircle, PlayCircleIcon } from 'lucide-react';
import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { CountDown } from './components/CountDown';
import { Menu } from './components/Menu';
import { Logo } from './components/Logo';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { useState } from 'react';
import { Footer } from './components/Footer';


export function App() {


  return (
    <>
      {/* Header / Menu */}
      <Container>
        <Logo />
      </Container>

      {/* Conteúdo principal */}
      <Container>
        <Menu />

        <CountDown />

       { <form className="form" action="">d
          <div className="formRow">
            <DefaultInput type="number" id="focus" value={25}>
              Foco (min):
            </DefaultInput>
          </div>}

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

        <div className="formRow">
          <Cycles />
        </div>
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
}