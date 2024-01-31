import { Helmet } from 'react-helmet';
import Home from '../components/Home';

const HomePage = () => (
  <>
    <Helmet>
      <title>Mohamad - Web Developer</title>
      <meta
        name="description"
        content="I can help you build a product, feature or website. Look through some of my work and experience!"
      />
      <link rel="canonical" href="https://www.mo-dev.site/" />

      <meta property="og:title" content="Mohamad - Web Developer" />
      <meta property="og:description" content="I can help you build a product, feature or website. Look through some of my work and experience!" />
      <meta property="og:type" content="portfolio" />
      <meta
        property="og:image"
        content="https://mishpacha.com/wp-content/uploads/2022/07/So-You-Want-to-Be-a%E2%80%A6-Web-Developer-R.jpg"
      />
      <meta property="og:url" content="https://www.mo-dev.site/" />
    </Helmet>
    <Home />
  </>
);
export default HomePage;
