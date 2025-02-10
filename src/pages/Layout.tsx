import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Mode from "../components/Mode.tsx";

function App() {
    const [mode, setMode] = useState<boolean>(() => {
        const md = localStorage.getItem('mode');
        return (md? JSON.parse(md): true);
    });

    const handleMode = (mode: boolean):void => setMode(mode);

    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = ():void => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [dropDown, setDropDown] = useState<boolean>(false);

    const handleDropDown = ():void => setDropDown(!dropDown);

    return (
        <main className={`max-w-[1534px] max-h-[1024px] w-screen h-screen transition-colors ${mode? 'lightmode' : 'darkmode'} flex flex-col`}>
            {width <= 767? 
            <nav className={`w-full min-h-16 h-16 relative`}>
                <div className={`w-full flex flex-col`}>
                    <div className={`w-full h-16 flex items-center justify-end px-6`}>
                        <div className={`flex flex-row items-center gap-6`}>
                            { dropDown? <></> : <Mode toggle={handleMode}/> }
                            <i className={`${dropDown? 'ri-close-large-line' : 'ri-menu-line' } text-3xl`} onClick={handleDropDown}></i>
                        </div>
                    </div>
                    {dropDown? 
                    <>
                        <span className={`w-full h-16 text-center ${mode? 'lightmode' : 'darkmode'} hover:underline`}>
                            <Link to='/' className={`text-md font-medium`}>Introduction</Link>
                        </span>
                        <span className={`w-full h-16 text-center ${mode? 'lightmode' : 'darkmode'} hover:underline`}>
                            <Link to='/about' className={`text-md font-medium`}>About</Link>
                        </span>
                        <span className={`w-full h-16 text-center ${mode? 'lightmode' : 'darkmode'} hover:underline`}>
                            <Link to='/project' className={`text-md font-medium`}>Project</Link>
                        </span>
                        <span className={`w-full h-16 bg-linear-to-b ${mode? 'from-[var(--light)]': 'from-[var(--dark)]'} to-transparent`}>

                        </span>
                    </>: <></>}
                </div>
            </nav>
             : 
            <nav className={`w-full min-h-16 h-16 flex items-center justify-end px-6`}>
                <div className={`flex flex-row items-center gap-6`}>
                    <Link to='/' className="text-md font-medium hover:underline">Introduction</Link>
                    <Link to='/about' className="text-md font-medium hover:underline">About</Link>
                    <Link to='/project' className="text-md font-medium hover:underline">Projects</Link>
                    <Mode toggle={handleMode}/>
                </div> 
            </nav>
            }
            <Outlet context={{width}}/>
        </main>
    );
}

export default App;