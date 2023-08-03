import { useState } from 'react'; 

const toggle = () => { 
    const [isOn, setOn] = useState<boolean>(false);
    const [onText, setOnText] = useState<string>("Español"); 

    
    const handleClick = (isOn: boolean) => { 
        setOn(!isOn);
        if (isOn) { 
            setOnText("English")
        }
        else{ 
            setOnText("Español")
        }
    }

    
    return (
        <div> 
            <button onClick = {() => handleClick(isOn)}>
                {onText}
            </button>
            </div>
    )

}