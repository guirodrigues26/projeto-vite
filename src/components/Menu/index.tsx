import Style  from "./styles.module.css";
import { HistoryIcon,SettingsIcon,SunIcon,TimerIcon } from "lucide-react";
import { ThemeToggle } from './components/ThemeToggle';

// Exemplo dentro do seu Header
<div className="header-actions">
    <ThemeToggle />
</div>
 
export function Menu() {
     return (
      <>
        <nav className= {Style.menu}>
          <a className= {Style.menuLink} href = "#">
          <TimerIcon />
        </a>
        <a className= {Style.menulink} href = "#">
          <HistoryIcon />
        </a>
        <a className={Style.menulink} href = "#">
          <SettingsIcon />
        </a>
        <a className= {Style.menulink} href = "#">
          <SunIcon />
        </a>
       </nav>
      </>        
     );
     
}