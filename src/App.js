import './App.css'

function App () {
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