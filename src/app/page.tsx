import Hero from './components/Hero/Hero';
import LatestPodcast from './components/LatestPodcast/LatestPodcast';
import Navigation from './components/Navigation/Navigation';

export default function Home() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main id="main-content">
        <Hero />
        <LatestPodcast />
      </main>
      <footer></footer>
    </>
  );
}
