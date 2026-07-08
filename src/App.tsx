import { useEffect, useState } from 'react';
import { Loader } from '@/components/Loader/Loader';
import { IntroScreen } from '@/components/IntroScreen/IntroScreen';
import { MainLayout } from '@/layout/MainLayout';
import { WeddingPage } from '@/pages/WeddingPage';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setIsLoading(false), 1350);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Loader isVisible={isLoading} />

      {!isLoading && !isOpened && (
        <IntroScreen onOpen={() => setIsOpened(true)} />
      )}

      {!isLoading && isOpened && (
        <MainLayout>
          <WeddingPage />
        </MainLayout>
      )}
    </>
  );
};