import React from 'react';

type TArrowButtonProps = {
  title: string,
  onClick: () => void,
  isTurned: boolean
};

const ArrowButton: React.FC<TArrowButtonProps> = (props: TArrowButtonProps) => (
  <button
    className={`arrow-button ${props.isTurned && 'arrow-button--turned'}`}
    title={props.title}
    onClick={props.onClick}
  >
    <span className="visually-hidden">{props.title}</span>
  </button>
);

export default ArrowButton;
