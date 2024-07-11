import * as React from 'react';
import Header from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import Container from './components/Container/Container';
import { useState, useEffect } from 'react';

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []); 

  return (
    <>
      {loading ? (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          className=' bg-[#EFEFEF]'
        >
          <div className="spinner">
            <img src="https://res.cloudinary.com/dzxgf75bh/image/upload/v1720680520/9f09d1ad-7738-4fb7-8d93-2acce7dd7a08.png" alt="Loader" />
          </div>
        </div>
      ) : (
        <>
          <Header />
          <Container />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
