import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import LatestArticle from './components/LatestArticle/LatestArticle';
import LatestPodcast from './components/LatestPodcast/LatestPodcast';
import Navigation from './components/Navigation/Navigation';

import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main id="main-content" className={styles.main}>
        {/* Hero section */}
        <Hero />
        <LatestPodcast />
        <LatestArticle />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
