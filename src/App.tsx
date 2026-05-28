import { Container } from "./components/Container"
import "./styles/global.css"
import "./styles/theme.css"

export function App(){
    console.log("Olá Mundo")
    return(
        <>
           <Container>
                     <section>
                         <p>LOGO</p>
                    </section>
            </Container>    

            <Container>
                     <section>
                         <p>MENU</p>
                    </section>
            </Container>    

             <Container>
                     <section>
                         <p>FORM</p>
                    </section>
            </Container>    

            <Container>
                     <section>
                         <p>FOOTER</p>
                    </section>
            </Container>    


</>
    )
}