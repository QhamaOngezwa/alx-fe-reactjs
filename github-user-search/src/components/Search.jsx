import { useState } from "react";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        throw new Error("User not found");
      }

      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
        onSubmit={handleSearch}
      </form>
      <login></login>
      {loading && <p>Loading...</p>}

      {error && <p>Looks like we cant find the user</p>}

      {user && (
        <div>
          <img src={user.avatar_url} alt={user.name} width="100" />
          <h3>{user.name}</h3>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
