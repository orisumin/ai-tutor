import "./lauren.css"

function SearchBar(){

    return(
    <form className="searchBar">
        <button>🞥</button>
        <input type = "text" autoComplete="off" placeholder="Ask your AI tutor" spellcheck="false"></input>
        <button>🡱</button>
    </form>
    )
}

export default SearchBar