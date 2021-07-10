import React, {useState} from 'react'
import './css/AppSwitchBtn.css'

const AppSwitchButton = ({position}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        console.log(isChecked);
        setIsChecked(!isChecked);
      };

    return (
            <div className="app-switch">
                <input id={`toggle-btn-${position}`} className="toggle" type="checkbox" checked={isChecked} onChange={handleOnChange} />
                <label htmlFor={`toggle-btn-${position}`}></label>
           </div>
    )
}

export default AppSwitchButton
