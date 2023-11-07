import MyButton from './components/MyButton.tsx';
import Heading from './components/Heading.tsx';
import Section from './components/Section.tsx';
import Counter from './components/Counter.tsx';
import List from './components/List.tsx';
import Dashboard from './components/Dashboard.tsx';
import { useState } from 'react';
import Login from './components/Login.tsx';
import MyForm from './components/MyForm.tsx';

function App() {
    let isLogin:boolean = false

    if (isLogin){
        return <Dashboard/>
    }else {
        return <Login/>
    }
}
    /*const [count,setCount] = useState<number>(1);
    return (
        <>
            <Dashboard></Dashboard>
            <List items= {["Star","Fork","Fire","Food","Bee"]} render= {(item) => <b>{item}</b>}></List>
            <Heading title="Hello Itl's me"/>
            <Section>My Section</Section>
            <Counter setCount={setCount}>Count = {count}/</Counter>

        </>
    )
}*/

export default App;