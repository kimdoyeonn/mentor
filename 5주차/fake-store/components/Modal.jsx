'use client';

import ReactDOM from 'react-dom';

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  // Portal 없이 CSS로만
  // return (
  //   <div className='fixed z-10 top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center'>
  //     <div className='p-5 bg-white rounded max-w-[500px] w-full text-black relative'>
  //       <button onClick={onClose} className='absolute text-lg top-5 right-5'>
  //         X
  //       </button>
  //       {children}
  //     </div>
  //   </div>
  // );

  // Portal로 작성된 모달
  return ReactDOM.createPortal(
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center'>
      <div className='p-5 bg-white rounded max-w-[500px] w-full text-black relative'>
        <button onClick={onClose} className='absolute text-lg top-5 right-5'>
          X
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('portal-root')
  );
};

export default Modal;
