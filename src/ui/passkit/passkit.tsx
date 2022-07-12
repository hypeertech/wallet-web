import { FC } from 'react';
import s from './passkit.module.css';
import { PkFieldsFragment } from '../../generated/graphql';
import { PKField } from './pk-field';

export const PassKit: FC<PkFieldsFragment> = props => {
  return (
    <div
      className={s.box}
      style={{
        color: props.labelColor || 'black',
        backgroundColor: props.backgroundColor || 'white',
        backgroundImage: `-webkit-image-set(${props.background?.imageset})`,
      }}
    >
      <img srcSet={props.logo!.srcset as string} />
      <div
        style={{
          marginTop: '2.9rem',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          {props.eventTicket?.primaryFields!.map(field => (
            <PKField
              key={field!.key}
              // @ts-ignore
              foregroundColor={props.foregroundColor}
              type={'primary'}
              {...field}
            />
          ))}

          {props.eventTicket!.secondaryFields!.map(field => (
            <PKField
              key={field!.key}
              // @ts-ignore
              foregroundColor={props.foregroundColor}
              type={'secondary'}
              {...field}
            />
          ))}
        </div>
        <div>
          <img
            style={{ maxHeight: '9.3rem' }}
            // @ts-ignore
            srcSet={props.thumbnail?.srcset}
          />
        </div>
      </div>

      <div className={s.auxiliary}>
        {props.eventTicket!.auxiliaryFields!.map(field => (
          <div className={s.b}>
            <PKField
              key={field!.key}
              // @ts-ignore
              foregroundColor={props.foregroundColor}
              type={'auxiliary'}
              {...field}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
