import {ButtonKit} from 'kit-ui-react'
import { useEffect } from 'react';
const HomePage = () => {
    useEffect(() =>{
    }, [])
    return <div style={
        {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px'
        }
    }>
        <ButtonKit color='success'  text='Hello' onClick={() => console.log(123)}/>
        <ButtonKit color='default'  text='Hello' onClick={() => console.log(123)}/>
        <ButtonKit color='warning'  text='Hello' onClick={() => console.log(123)}/>
        <ButtonKit color='cyan'  text='Hello' onClick={() => console.log(123)}/>
        <ButtonKit color='error'  text='Hello' onClick={() => console.log(123)}/>
    </div>;
};

export default HomePage;
