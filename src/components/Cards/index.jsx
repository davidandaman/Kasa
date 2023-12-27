
import Card from '../Card'

const freelanceProfiles = [
  {
      title: 'Appartement cosy',
  },
  {
      title: 'Magnifique appartement proche Canal Saint Martin',
  },
  {
      title: 'Studio de charme - Buttes Chaumont',
  },
]



function Cards() {
  return (
      <div>
          {freelanceProfiles.map((profile, index) => (
              <Card
                  key={`${profile.title}-${index}`}
                  title={profile.title}
              />
          ))}
      </div>
  )
}

export default Cards
