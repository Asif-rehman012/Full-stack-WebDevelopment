import Counter from "./components/Counter";
import Fruits from "./components/Fruits";
import { useState } from "react";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import Notes from "./components/Notes";
import UserForm from "./19. forms and hooks/UserForm";
import UseEffectHook from "./19. forms and hooks/UseEffectHook";
import Hooks from "./19. forms and hooks/Hooks";
import NewsApp from "./19. forms and hooks/NewsApp";

function App() {
             const [countInParent, setcountInParent] = useState(0);
 
         function updateCountInParent(count){
          setcountInParent(count)
         }

         function uploaddata(){
          console.log('I will now start uploading data');
          
         }
 
             return (
    <div>
      {/* <Counter/>  */}
                {/* mention that program which you want to run */}
    
       {/* <Fruits/> */}
       {/* <Notes></Notes> */}
  {/* <p>inside the parent : {countInParent}</p>
       <Child1 onCountUpdate={updateCountInParent}/>
       <p>data parent to child2---</p>
       <Child2 countFromparent={countInParent} uploaddata={uploaddata} />
        */}

        {/* lecture 19 components */}
        {/* <UserForm></UserForm> */}
        {/* <UseEffectHook></UseEffectHook> */}
      {/* <Hooks></Hooks> */}
      <NewsApp></NewsApp>
    </div>
  );
}

export default App;
