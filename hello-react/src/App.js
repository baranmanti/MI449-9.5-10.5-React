import './App.css';

const players = [
  {
    name: 'Marc-André ter Stegen',
    age: 30,
    position: 'GK',
  },
  {
    name: 'Ronald Araujo',
    age: 24,
    position: 'CB',
  },
  {
    name: 'Andreas Christensen',
    age: 26,
    position: 'CB',
  },
  {
    name: 'Alejandro Balde',
    age: 19,
    position: 'LB',
  },
  {
    name: 'Ilkay Gundogan',
    age: 33,
    position: 'CM',
  },
  {
    name: 'Frenkie de Jong',
    age: 25,
    position: 'CM',
  },
  {
    name: 'Pedri',
    age: 20,
    position: 'CM',
  },
  {
    name: 'Joao Felix',
    age: 24,
    position: 'LW',
  },
  {
    age: 27,
    position: 'RW',
  },
  {
    name: 'Gavi',
    age: 18,
    position: 'AM',
  },
  {
    name: 'Robert Lewandowski',
    age: 34,
    position: 'ST',
  }
];

function PlayerList() {
  return (
    <div className="player-list" style={{ display: 'flex', flexDirection: 'column', marginTop: '5vh' }}>
      {players.map((player, index) => (
        <div key={index} className="playerCard" style={{ display: 'flex', alignItems: 'center', marginBottom: '3vh' }}>
          <div>
            {/* use of conditional statement for player name */}
            <strong>{player.name ? player.name : 'No player name provided'}</strong> ({player.age}) - {player.position}
          </div>
        </div>
      ))}
    </div>
  );
}


function Title() {
  return (
    <h2>FC Barcelona Squad</h2>
  );
}

function Logo() {
  return (
    <h1>FCB</h1>
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