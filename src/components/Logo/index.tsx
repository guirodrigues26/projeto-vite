import { TimerIcon } from "lucide-react";
import Style  from "./styles.module.css";
 
export function Logo() {
     return (
        <div className={`${Style.logo}$(style.paragraph}`}>
          <a className="{style.logoLink}" href="#">
          <TimerIcon />
        <span>Chronos</span>
        </a>
       </div>        
     );
     
}