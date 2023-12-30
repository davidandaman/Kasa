import Cards from "../../components/Cards";
import HomeBanner from "../../assets/images/imsource1.png";

function Home() {
  return (
    <section className="main">
      <div>
        <div className="banner">
          <img src={HomeBanner} alt="Kasa" />
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <Cards />
      </div>
    </section>
  );
}

export default Home;
