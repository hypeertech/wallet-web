import { FC } from 'react';
import s from './pk-field.module.css';
import { PkFieldsFieldsFragment } from '../../generated/graphql';

export interface PKFieldProps {
  foregroundColor: string;
  type: string;
}

export const PKField: FC<PkFieldsFieldsFragment & PKFieldProps> = props => {
  return (
    <div className={`${s.box} ${s[props.type]}`}>
      <div className={s.label}>{props.label}</div>
      <div className={s.value} style={{ color: props.foregroundColor }}>{props.value}</div>
    </div>
  );
};
