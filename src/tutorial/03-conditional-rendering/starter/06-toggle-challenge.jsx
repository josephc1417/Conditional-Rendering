import { useState } from "react";


const ToggleChallenge = () => {
  
const [showAlert, setShowAlert] = useState(false)
  
// const toggleAlert = () => {
//   if(showAlert) {
//     setShowAlert(false)
//     return; 
// }
// setShowAlert(true)
// };

return(
    <div>
    <button type="button" className="btn" onClick={() => setShowAlert(!showAlert)}>toggle</button>
    {showAlert &&<Alert />}
    </div>
  ) 
};

const Alert = () => {
  return(
    <div className="">Hello World</div>
  )
}


export default ToggleChallenge;
