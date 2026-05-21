import style from './Heading.module.css'

    type HeadingProps = {
        children: string;
      
      
    };
    
    export function Heading({children}: HeadingProps){
    return  <h1 className={`${style.heading}} ${style.paragraph}`}>{children}</h1>
}
