import type { ReactNode } from 'react';
import styles from  './index.module.scss';
import {X} from  'lucide-react';
interface IProps{
    type:'alert-warning' | 'alert-primary' |'alert-info' | 'alert-success' | 'alert-danger';
    icon:ReactNode;
    title:string;
    description:ReactNode;
   
}
const Alert= ({type,icon,title,description}:IProps)=>{return(<>
   <div className={` container my-4 ${styles[type]}`}> 
   <div className={`${styles.alertHeader}`}> 
   <div className={`${styles.alertTitle}`}>
 {icon}  
   <h1> alert {title}</h1>
   </div>
   <span> <X /></span>
   </div>
  
       <p>{description}</p>
   </div>

</>)}
export default Alert;

