'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { useState } from 'react';

const StatusFilter = () => {
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState<string>('');

    const handleOptionChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value)
        setSelectedOption(event.target.value);
    };

    const handleButtonClick = () => {
        if (selectedOption) {
            // router.push("/to_dos/list?status='"+selectedOption+"'");
            router.push("/to_dos/list?status="+selectedOption);
        }
    };
  return (
    <div>
        <select value={selectedOption} onChange={handleOptionChange}>
            <option value="">Select Option</option>
            <option value="OPEN">Open</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="CLOSED">Closed</option>
        </select>
        <br/>
        <button onClick={handleButtonClick} color='blue'>Sort</button>
    </div>
  )
}

export default StatusFilter