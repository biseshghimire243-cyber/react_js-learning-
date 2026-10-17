function SpeedTestCard({ provider, download, upload }) {
    return (
        <div>
            <h2>{provider}</h2>
            <p>Download Speed: {download} Mbps</p>
            <p>Upload Speed: {upload} Mbps</p>

            {download >= 100 ? <p>Fast Connection</p> : <p>Standard Connection</p>}
        </div>
    );
}

function App() {
    const connections = [
        { id: 1, provider: "Provider A", download: 150, upload: 50 },
        { id: 2, provider: "Provider B", download: 75, upload: 25 },
        { id: 3, provider: "Provider C", download: 200, upload: 100 }
    ];

    return (
        <div>
            {connections.map((connection) => (
                <SpeedTestCard
                    key={connection.id}
                    provider={connection.provider}
                    download={connection.download}
                    upload={connection.upload}
                />
            ))}
        </div>
    );
}

export default App;