
import React, { useCallback, useState } from 'react'
import POTitle from './POTitle';
import POButton from './POButton';
import POCount from './POCount';

function PerformanceOpti() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    
    const incrementAge = useCallback(()=>{
        setAge(age+1);
    }, [age]);

    const incementSalary = useCallback(()=>{
        setSalary(salary+1000);
    }, [salary])

    return (
        <div>
            <POTitle/>
            <POCount text="Age" count={age}/>
            <POButton handleClick={incrementAge}>Increment Age</POButton>
            <POCount text="Salary" count={salary}/>
            <POButton handleClick={incementSalary}>Increment Salary</POButton>
        </div>
    )
}

export default PerformanceOpti