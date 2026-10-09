function MusicCard({ title, artist, duration }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>Artist: {artist}</p>
            <p>Duration: {duration}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <MusicCard title="Shape of You" artist="Ed Sheeran" duration="4:24" />
            <MusicCard title="Perfect" artist="Ed Sheeran" duration="4:23" />
            <MusicCard title="Believer" artist="Imagine Dragons" duration="3:24" />
        </div>
    );
}

export default App;