import { useState } from "react";
import './App.css'

function App() {
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        searchRepos();
    };

    function searchRepos() {
        setLoading(true);
        axios({
            method: "get",
            url: `https://api.github.com/users/${username}/repos`,
        }).then(res => {
            setLoading(false);
            setRepos(res.data);
        });
    }




    return (
        <div className="page">
            <div className="landing-page-container">
                <div className="left-side">
                    <form className="form">
                        <input
                        className='input'
                        value={username}
                        placeholder="Github Username"
                        onChange={e => setUsername(e.target.value)}
                        />
                        <button className="button" onClick={handleSubmit}>{loading ? "Searching..." : "Search"}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


/*
const URL = `https://api.github.com/users/${username}/repos`

const getData = async () => {
const res = await fetch(URL)
const data = await res.json()

// do something with data
}
*/
