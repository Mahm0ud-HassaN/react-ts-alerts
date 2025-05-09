// import bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {AlertCircleIcon, AlertOctagon, AlertTriangleIcon, Ban, BellRing, MessageCircleWarningIcon} from  'lucide-react';



import './App.css';
import Alert from './Components/UIalert/alert';

function App() {

  return (
    <>
    <div className="py-5">
    <Alert type='alert-danger' icon={<Ban/>} title='danger' description='
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
       Nobis error beatae consequatur sunt earum eveniet sequi deserunt est,
       nesciunt reiciendis!Nobis error beatae consequatur sunt earum eveniet sequi deserunt est,
       nesciunt reiciendis!' /> 
         <Alert type='alert-success' icon={<AlertOctagon/>} title='danger' description='
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
       Nobis error beatae consequatur sunt earum eveniet sequi deserunt est,
       nesciunt reiciendis!Nobis error beatae consequatur sunt earum eveniet sequi deserunt est,
       nesciunt reiciendis!' /> 
         <Alert type='alert-warning' icon={<MessageCircleWarningIcon/>} title='danger' description={<>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
       Nobis error beatae consequatur sunt earum eveniet sequi deserunt est,
       nesciunt <a href="#">link</a>reiciendis!Nobiserror beatae consequatur sunt earum eveniet sequi deserunt est,
       nesciunt reiciendis!'</p>
       
         </>}
       /> 
         <Alert type='alert-info' icon={<AlertTriangleIcon/>} title='danger' description='
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
       Nobis error beatae consequatur sunt earum eveniet sequi deserunt est,
       nesciunt reiciendis!Nobis error beatae consequatur sunt earum eveniet sequi deserunt est,
       nesciunt reiciendis!' /> 
         <Alert type='alert-primary' icon={<AlertCircleIcon/>} title='danger' description='
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
       Nobis error beatae consequatur sunt earum eveniet sequi deserunt est,
       nesciunt reiciendis!Nobis error beatae consequatur sunt earum eveniet sequi deserunt est,
       nesciunt reiciendis!' /> 
    </div>

    
    </>
  )
}

export default App;
