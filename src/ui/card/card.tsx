import { FC } from 'react';
import { useResizeDetector } from 'react-resize-detector';
import s from './card.module.css';

export interface CardProps {
  readonly text: string;
  readonly textColor?: string;
  readonly backgroundColor?: string;
}

export const Card: FC<CardProps> = ({ text, textColor, backgroundColor }) => {
  const { width, ref } = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 300,
  });

  const fontSizeDivisor = 10.5;

  return (
    <div className={s.card} ref={ref} style={{ backgroundColor }}>
      <p
        className={s.text}
        style={{ color: textColor, fontSize: width! / fontSizeDivisor || 0 }}
      >
        {text}
      </p>
    </div>
  );
};
