import React, { useContext } from 'react';
import { ImportsNotUsedAsValues } from 'typescript';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';
import { ThemeContext, useThemeContext } from './contexts/ThemeContext';

function App() {

  // 1. Weg um auf Variablen des Contexts zuzugreifen
  // const customTheme = useContext(ThemeContext);
  // const switchTheme = useContext(ThemeContext);

  // 2. Weg um auf Variablen des Contexts zuzugreifen --- nur ein Weg kann einkommentiert sein, weil sonst variablen doppelt benutzt werden
  const { customTheme, switchTheme } = useThemeContext();

  return (
      <main className='h-screen w-screen overflow-hidden flex flex-col items-center'>
        <Navbar/>
        <section className='flex flex-col items-center max-w-screen-lg w-full py-20 h-full grow'>
          <h1 className='text-primary w-full text-start text-3xl font-bold underline pb-4'>Our Booklist</h1>
          <Booklist/>
        </section>
      </main>
  );
}

export default App;
