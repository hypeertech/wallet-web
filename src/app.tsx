import { FC } from 'react';
import { Header } from './ui/header/header';
import { CardsList } from './ui/cards-list/cards-list';

export const App: FC = () => {
  return (
    <>
      <Header />
      <CardsList />
    </>
  );
};

export default App;
