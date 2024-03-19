'use client'
import React, { useState } from 'react';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { MinusCircle, PlusCircle } from 'lucide-react';

function DynamicInputFields() {
  const [inputs, setInputs] = useState(['']); 
  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleRemoveInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  return (
    <div className='mt-10'>
      {inputs.map((input, index) => (
        <div key={index}>
          <Input
            type="text"
            value={input}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
          <Button onClick={() => handleRemoveInput(index)} variant='secondary'> <MinusCircle size={20}/></Button>
        </div>
      ))}
      <Button onClick={handleAddInput} variant='outline'> <PlusCircle size={20} className='mr-2'/>Add Input Fields</Button>
    </div>
  );
}

export default DynamicInputFields;
