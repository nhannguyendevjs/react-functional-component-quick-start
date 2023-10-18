import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Hello from './components/Hello';
import { UserContext } from './contexts/user.context';
import { timer, take, finalize } from 'rxjs';

function App(props: unknown) {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState('');

  useEffect(() => {
    console.log('An empty array - Runs only on the first render');
    timer(0, 1000).pipe(take(3), finalize(() => { setUser('Nhan Nguyen') })).subscribe(value => {
      setUser('' + value);
    });
  }, []);

  useEffect(() => {
    console.log('No dependency passed - Runs on every render');
  });

  useEffect(() => {
    console.log('Props or state values - Runs on every count change');
  }, [props, count]);

  return (
    <>
      <UserContext.Provider value={user}>
        <Hello />
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </UserContext.Provider>
    </>
  );
};

export default App;
