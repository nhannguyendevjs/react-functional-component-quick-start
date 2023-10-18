import { useContext } from 'react';
import { UserContext } from '../contexts/user.context';

function Hello() {
  const user = useContext(UserContext);

  return (
    <>
      <div> Hello {user} !!! </div>
    </>
  )
}

export default Hello;
