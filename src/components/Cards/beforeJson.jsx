import Card from "../Card";

const freelanceProfiles = [
  {
    title: "Appartement cosy",
    picture: "../../assets/images/chat.jpg",
  },
  {
    title: "Magnifique appartement proche Canal Saint Martin",
  },
  {
    title: "Studio de charme - Buttes Chaumont",
  },
  {
    title: "Appartement de Standing - 10e",
  },
  {
    title: "Studio d'artiste",
  },
  {
    title: "Superbe appartement proche Tour Eiffel",
  },
];

function Cards() {
  return (
    <div className="show-cards">
      {freelanceProfiles.map((profile, index) => (
        <Card key={`${profile.title}-${index}`} title={profile.title} />
      ))}
    </div>
  );
}

export default Cards;
