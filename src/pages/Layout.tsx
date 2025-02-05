import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Mode from "../components/Mode.tsx";

function App() {
    const [mode, setMode] = useState<boolean>(() => {
        const md = localStorage.getItem('mode');
        return (md? JSON.parse(md): true);
    });

    const handleMode = (mode: boolean):void => setMode(mode);

    return (
        <main className={`max-w-[1534px] max-h-[1024px] w-screen h-screen transition-colors ${mode? 'lightmode' : 'darkmode'} flex flex-col`}>
            <nav className={`w-full h-16 flex items-center justify-end px-6`}>
                <div className={`flex flex-row items-center gap-6`}>
                    <Link to='/' className="text-md font-medium">Introduction</Link>
                    <Link to='/about' className="text-md font-medium">About</Link>
                    <Link to='/projects' className="text-md font-medium">Projects</Link>
                    <Mode toggle={handleMode}/>
                </div>
            </nav>
            <Outlet />
        </main>
    );
}

export default App;