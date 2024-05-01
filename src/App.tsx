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
    }, 3000);

    return () => clearTimeout(timer);
  }, []); 

  

  return (
    <>
      {loading ? (
        <div className="spinner filter contrast-150">
          <img src="https://res.cloudinary.com/dzxgf75bh/image/upload/v1714570038/1494_unlmwm.gif" alt="Loader" />
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
