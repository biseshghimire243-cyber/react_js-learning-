import { useState } from "react";

function App() {

    const [likes, setLikes] = useState(0);

    function likePost() {
        setLikes(likes + 1);
    }

    return (
        <div>
            <h1>My Post</h1>

            <p>
                Learning React.js is fun!
            </p>

            <h2>
                ❤️ {likes}
            </h2>

            <button onClick={likePost}>
                Like
            </button>
        </div>
    );
}

export default App;