import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 bg-[#00dd20] w-${width} hover:drop-shadow-xl hover:bg-green-b`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
