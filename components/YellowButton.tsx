import React, { ReactNode } from 'react';

interface YellowButtonProps {
  children: ReactNode;
}

const YellowButton: React.FC<YellowButtonProps> = ({ children }) => {
  return (
    <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
      {children}
    </button>
  );
};

export default YellowButton;