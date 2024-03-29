import './App.css';

const players = [
  {
    name: 'Marc-André ter Stegen',
    age: 30,
    position: 'GK',
    picture: 'https://www.fcbarcelona.com/photo-resources/2023/10/03/7d67f42b-2a8d-4e51-8d41-8aa3542482e4/01-MARC-ANDRE_TER_STEGEN.jpg?width=1680&height=1050'
  },
  {
    name: 'Ronald Araujo',
    age: 24,
    position: 'CB',
    picture: 'https://www.fcbarcelona.com/photo-resources/2023/10/03/93330ade-5bdf-420a-a989-2c337f8104ca/04-RONALD_ARAUJO_.jpg?width=1680&height=1050'
  },
  {
    name: 'Andreas Christensen',
    age: 26,
    position: 'CB',
    picture: 'https://www.fcbarcelona.com/photo-resources/2023/10/03/3acd07d7-8081-4050-a62c-1c1302038c23/15-ANDREAS_CHRISTENSEN.jpg?width=1680&height=1050'
  },
  {
    name: 'Alejandro Balde',
    age: 19,
    position: 'LB',
    picture: 'https://www.fcbarcelona.com/photo-resources/2023/10/03/993af0d7-2b2c-40d1-9e9b-c24f8d165537/mini_28-BALDE.jpg?width=1680&height=1050'
  },
  {
    name: 'Ilkay Gundogan',
    age: 33,
    position: 'CM',
    picture: 'https://www.fcbarcelona.com/photo-resources/2023/10/03/3f3b9374-b75e-43f7-9e3e-ceddd9dc211d/jugador_fitxa-gundogan.jpg?width=1680&height=1050'
  },
  {
    name: 'Frenkie de Jong',
    age: 25,
    position: 'CM',
    picture: 'https://www.fcbarcelona.com/photo-resources/2023/10/03/d2214796-ebc8-4b1c-bb5d-37f2ce5883c7/21-FRENKIE_DE_JONG.jpg?width=1680&height=1050'
  },
  {
    name: 'Pedri',
    age: 20,
    position: 'CM',
    picture: 'https://www.fcbarcelona.com/photo-resources/2023/10/03/4b341216-a50a-4d80-95ff-5ca2e5dcf640/08-PEDRI.jpg?width=1680&height=1050'
  },
  {
    name: 'Joao Felix',
    age: 24,
    position: 'LW',
    picture: 'https://www.fcbarcelona.com/photo-resources/2023/10/03/8a21c5f5-bea0-470e-bd2b-c905aeab7ade/jugador_fitxa-felix.jpg?width=1680&height=1050'
  },
  {
    name: 'Raphinha',
    age: 27,
    position: 'RW',
    picture: 'https://www.fcbarcelona.com/photo-resources/2023/10/03/865c65cd-9dc0-41b8-b373-6a922e29d594/22-RAPHINHA.jpg?width=1680&height=1050'
  },
  {
    name: 'Gavi',
    age: 18,
    position: 'AM',
    picture: 'https://www.fcbarcelona.com/photo-resources/2023/10/03/1a22465f-7e9b-463d-981a-908dd221dd88/30-GAVI_.jpg?width=1680&height=1050'
  },
  {
    name: 'Robert Lewandowski',
    age: 34,
    position: 'ST',
    picture: 'https://www.fcbarcelona.com/photo-resources/2023/10/03/04101be1-2cef-4fb8-ae97-99a99297f65c/09-ROBERT_LEWANDOWSKI.jpg?width=1680&height=1050'
  }
];

function PlayerList() {
  return (
    <div className="player-list" style={{ display: 'flex', flexDirection: 'column', marginTop: '5vh' }}>
      {players.map((player, index) => (
        <div key={index} className="playerCard" style={{ display: 'flex', alignItems: 'center', marginBottom: '3vh' }}>
          {player.picture ? (
            <img src={player.picture} alt={player.name} style={{ width: '35vh', height: '22vh', marginRight: '2vh' }} />
          ) : (
            <div style={{ width: '35vh', height: '22vh', marginRight: '2vh', backgroundColor: 'gray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span>No Image</span>
            </div>
          )}
          <div>
            <strong>{player.name}</strong> ({player.age}) - {player.position}
          </div>
        </div>
      ))}
    </div>
  );
}


function Title() {
  return (
    <h1>FC Barcelona Squad</h1>
  );
}

function Logo() {
  return (
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1010px-FC_Barcelona_%28crest%29.svg.png" alt="FC Barcelona Logo" style={{ width: '20vh', height: '20vh', marginBottom: '2vh', marginTop: '10vh'}}/>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Title />
        <PlayerList />
      </header>
    </div>
  );
}

export default App;