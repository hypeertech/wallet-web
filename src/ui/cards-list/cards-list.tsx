import { FC } from 'react';
import s from './cards-list.module.css';
import { Card } from '../card/card';
import { useWalletQuery } from '../../generated/graphql';
import { PassKit } from '../passkit/passkit';

const cards = [
  {
    id: '0',
    text: 'Пятёрочка',
    textColor: 'white',
    backgroundColor: '#E52322',
  },
  {
    id: '1',
    text: 'Магнит',
    textColor: 'white',
    backgroundColor: '#E6000E',
  },
  {
    id: '2',
    text: 'Лента',
    textColor: '#FEBE10',
    backgroundColor: '#003C96',
  },
  {
    id: '3',
    text: 'IKEA Family',
    textColor: 'white',
    backgroundColor: '#0077C8',
  },
  {
    id: '4',
    text: 're:Store',
    textColor: 'white',
    backgroundColor: '#FF208A',
  },
];

export const CardsList: FC = () => {
  const { data, loading, error } = useWalletQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const PassKitCollection = () => {
    if (data!.wallet!.passCollection?.length === 0) {
      return null;
    }
    return (
      <>
        {data!.wallet!.passCollection!.map((passkit, index) => (
          <PassKit key={index} {...passkit!.passkitData} />
        ))}
      </>
    );
  };

  return (
    <div className={s.box}>
      <PassKitCollection />
      <div className={s['cards-list']}>
        {cards.map(card => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};
