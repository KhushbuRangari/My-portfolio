import React, { useEffect, useState } from "react";
import {
  getGitHubProfile,
  getGitHubRepositories,
} from "../services/githubService";

function GitHubProfile() {
  const [profile, setProfile] = useState(null);
  const [repositories, setRepositories] = useState([]);
console.log(profile);
  useEffect(() => {
    fetchProfile();
    fetchRepositories();
  }, []);

  const fetchProfile = async () => {
    try {
      const data = await getGitHubProfile();
      setProfile(data);
    } catch (error) {
      console.error("Error fetching GitHub profile:", error);
    }
  };

  const fetchRepositories = async () => {
    try {
      const data = await getGitHubRepositories();
      setRepositories(data);
    } catch (error) {
      console.error("Error fetching GitHub repositories:", error);
    }
  };

  return (
    <>
      <div id="section5" className="container base GitHubProfile">
      <h1 className="text-center">GitHub Profile</h1>
        <div className="row">
      
          <div className="col">
        
            {profile && (
              <div>
                <h2>{profile.name} </h2>
                <img
                  src={profile.avatar_url}
                  alt={`${profile.login}'s avatar`}
                  style={{ width: "90px", height: "100px"}}
                />
                <p>{profile.bio}</p>
              </div>
            )}

            {repositories.length > 0 && (
              <div>
                <h3>Repositories</h3>
                <ul>
                  {repositories.map((repo) => (
                    <li key={repo.id}>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {repo.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
      
        </div>
      </div>
    </>
  );
}

export default GitHubProfile;
