import { useState } from 'react';

const LiftingStateDemo = () => {
  const [userInput, setUserInput] = useState('');

  return (
    <div>
        <h1>Lifting State Demo</h1>
        <InputComponent userInput={userInput} setUserInput={setUserInput} />
        <OutputComponent userInput={userInput} />
    </div>
  );
};

const InputComponent = ({ userInput, setUserInput }) => {
  
    const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div>
      <input type="text" value={userInput} onChange={handleChange} />
    </div>
  );
};

const OutputComponent = ({userInput}) => {
  return (
    <div>
      <p>User Input: {userInput}</p>
    </div>
  );
};

export default LiftingStateDemo;