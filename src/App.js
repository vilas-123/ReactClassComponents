import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/welcome';
import Hello from './Components/hello';
import Messages from  './Components/Messages';
import Counter from './Components/Counter';
import FunctionCick from './Components/FunctionCick';
import Classclick from './Components/Classclick';
import Eventbind from './Components/Eventbind';

import If from './Components/If';
import Namelist from './Components/Namelist';

import Stylesheet from './Components/Stylesheet';
import Inline from './Components/Inline';
import LifecycleA from './Components/LifecycleA';
import FragementDemo from './Components/FragementDemo';
import Columns from './Components/Columns';
import Tables from './Components/Tables';

import ParentComponent from './Components/ParentComponent';
import Refsdemo from './Components/Refsdemo';
import FriParent from './Components/FriParent';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import UpdatedCounter from './Components/HoverCounter';
import ClickCountertwo from './Components/ClickCountertwo';
import HoverCountertwo from './Components/HoverCountertwo';
import User from './Components/User';
import Ccounter from './Components/Ccounter';
import { UserProvider, userProvider } from './Components/UserContext';

import ComponentC from './Components/ComponentC'
import Postlist from './Components/Postlist';



function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Messages /> */}
      {/* <FunctionCick /> */}
      {/* <Classclick /> */}
      {/* <Eventbind /> */}
      {/* <Parentcomponent /> */}
      {/* <If/> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <Inline /> */}
      {/* <LifecycleA /> */}
      {/* <FragementDemo /> */}
      {/* <Tables /> */}
      {/* <ParentComponent /> */}
      {/* <Refsdemo /> */}
      {/* <FriParent /> */}
      {/* <ClickCounter /> */}
     
      {/* <ClickCountertwo />
      <HoverCountertwo /> */}
      {/* < User render = {(isLoggedIn) => isLoggedIn?'vilas':'Guest' } /> */}
      {/* <Ccounter render={(count, Increment) => (
  <ClickCountertwo count={count} Increment={Increment} />
)} />

<Ccounter render={(count, Increment) => (
  <HoverCountertwo count={count} Increment={Increment} />
)} /> */}

    {/* <UserProvider value='vilas'>        
      <ComponentC />
    </UserProvider> */}
    <Postlist />
     </div>
       
   
    
  );
}

export default App;
