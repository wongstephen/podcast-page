import Hero from './components/Hero/Hero';
import Navigation from './components/Navigation';

export default function Home() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main id="main-content">
        <Hero />
      </main>
      <footer></footer>
    </>
  );
}
