import axios from "axios";

function fetchUserData(username) {
  const apiUrl = `https://api.github.com/users/${username}`;
  axios.get(apiUrl);
  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return {
        login: data.login,
        name: data.name,
        avatarUrl: data.avatar_url,
        bio: data.bio,
        publicRepos: data.public_repos,
        followers: data.followers,
        following: data.following,
        createdAt: data.created_at,
      };
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      throw error;
    });
}
export { fetchUserData };
