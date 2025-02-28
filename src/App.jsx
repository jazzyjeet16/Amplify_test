import { useState } from 'react';

const InteractivePage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-300 to-teal-600 text-white">
      <h1 className="text-4xl font-bold mb-4">Interactive Counter</h1>
      <p className="text-xl mb-4">Current Count: <span className="font-bold">{count}</span></p>
      <div className="flex space-x-4">
        <button 
          className="px-4 py-2 bg-white text-teal-600 rounded-lg shadow-lg hover:bg-gray-200 transition"
          onClick={() => setCount(count + 1)}
        >
          Increase
        </button>
        <button 
          className="px-4 py-2 bg-white text-teal-600 rounded-lg shadow-lg hover:bg-gray-200 transition"
          onClick={() => setCount(count>0 ?count - 1:0)}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default InteractivePage;
