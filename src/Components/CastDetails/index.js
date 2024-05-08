import './index.css'

function CastDetails({cast}) {
  return (
    <div className="cast-details">
      <h2>Cast</h2>
      <div className="cast-grid">
        {cast.map(member => (
          <div key={member.id} className="cast-member">
            <img
              src={`https://image.tmdb.org/t/p/w200/${member.profile_path}`}
              alt={member.name}
            />
            <p>{member.name}</p>
            <p>as {member.character}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CastDetails
