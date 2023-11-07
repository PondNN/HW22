import React, { useState } from 'react';



const Login = () => {
    const [Weight, setWeight] = useState<number>(0);
    const [Height, setHeight] = useState<number>(0);

    const onChangeWeight = (event :React.ChangeEvent<HTMLInputElement>) => {
        setWeight(+event.target.value)
        console.log(Weight)
    }

    const onChangeHeight = (event :React.ChangeEvent<HTMLInputElement>) => {
        setHeight(+event.target.value)
        console.log(Height)
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault
        console.log("Submitted")
    }

    let cal:number = Weight*2.2*30/2;
    
    return (
        <>
        <div>
            <h1>ควรดื่มน้ำวันละเท่าไหร่ ?</h1>
            <h1>{cal} มล.</h1>
            <form onSubmit={onSubmit}>
                <input type="text" id="weight" name="weight" placeholder="น้ำหนักของคุณ(Kg.)" onChange={onChangeWeight}/>
            </form>
        </div>
        </>
    )
}

export default Login