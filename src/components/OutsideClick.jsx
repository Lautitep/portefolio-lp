import React, { useRef, useEffect } from 'react';

const OutsideClick = ({ children, onClose }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return <div ref={wrapperRef} style={{height: 'calc(100% - 140px)'}}>{children}</div>;
};

export default OutsideClick;
