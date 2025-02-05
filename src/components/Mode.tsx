import { useState } from 'react';

type ModeProps = {
    toggle: (mode: boolean) => void;
};

function Mode({toggle}: ModeProps) {
    const [mode, setMode] = useState<boolean>(() => {
        const md = localStorage.getItem('mode');
        return (md? JSON.parse(md): true);
    }); // true if light, false if dark

    const toggleMode = ():void => {
        const newMode: boolean = !mode;
        
        setMode(newMode);
        localStorage.setItem('mode', JSON.stringify(newMode));
        toggle(newMode);
    }

    return (
        <div>
            <i className={`${mode? 'ri-moon-line': 'ri-sun-line'} text-3xl`} onClick={toggleMode}></i>
        </div>
    )
}  

export default Mode;