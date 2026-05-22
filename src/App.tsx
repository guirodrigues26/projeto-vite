import { Heading } from "./components/Heading";
import "./styles/global.css"
import "./styles/theme.css"
import { TimerIcon } from "lucide-react";
export function App(){
    console.log("Olá Mundo")
    return(
        <>
        <div className="container">
        <div className="content">

        <Heading>
            Olá Mundo ! 
            <button>
                 <TimerIcon/>
            </button>
        </Heading>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        A illo dolorem fugiat minus inventore laboriosam! Asperiores,
        nisi ex odio ducimus, consequuntur voluptates, officia error culpa cupiditate aperiam facere! Iusto, nihil!
   
        
        </div>
        </div>
    </>
    )
}