import React from 'react';
import './button.scss';

type ButtonProps = {
  title: string;
  onClick: () => void;
};

export const Button = ({ onClick, title }: ButtonProps) => {
  return (
    <button className="pastel-button" onClick={onClick}>
      {title}
    </button>
  );
};
