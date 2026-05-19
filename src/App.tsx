import { Fragment } from "react/jsx-runtime";
import { Heading } from "./components/Heading";
import "./styles/global.css"
import "./styles/theme.css"
export function App(){
    console.log("Olá Mundo")
    return(
        <Fragment>
        <Heading>Olá Mundo 0!</Heading>
        <Heading>Olá Mundo 1!</Heading>
        <Heading>Olá Mundo 2!</Heading>        
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        A illo dolorem fugiat minus inventore laboriosam! Asperiores,
        nisi ex odio ducimus, consequuntur voluptates, officia error culpa cupiditate aperiam facere! Iusto, nihil!
   
    </p>
</Fragment>
    )
}
 