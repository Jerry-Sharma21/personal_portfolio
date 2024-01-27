import React from 'react';
import { useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa';

const SubmitButton: React.FC = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full 
      outline-none transition-all flex items-center justify-center gap-2
      group focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950
      dark:bg-white dark:bg-opacity-10"
      type="submit"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{' '}
        </>
      )}
    </button>
  );
};

export default SubmitButton;
