import { useState } from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="center">
      <img src="/images/Sakurita.jpeg" alt="Sakurita" />

        <h1 className="name">María González Olave</h1>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export const MainLayout = ({
  children,
  paddingTop,
}: MainLayoutProps) => {

  return (
    <main className="relative h-screen overflow-hidden bg-background-gray rounded-2xl">
      <div className="flex items-start justify-between h-full ">
        <SideBar />
        <div className="flex flex-col w-full h-full">
          <div className={`h-full w-full bg-transparent overflow-hidden ${paddingTop ? paddingTop : "pt-10"}`}>
            <div className="overflow-auto w-full h-full px-10 pb-8">
              {children}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}; 

export default App;
