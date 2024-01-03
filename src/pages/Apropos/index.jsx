import AboutKasa from "../../components/AboutKasa";
import HomeBanner from "../../assets/images/imsource2.png";

export default function Apropos() {
  return (
    <section className="main">
      <div>
        <div className="container-banner">
          <div className="banner">
            <img src={HomeBanner} alt="Kasa" />
          </div>
        </div>
        <AboutKasa />
      </div>
    </section>
  );
}
