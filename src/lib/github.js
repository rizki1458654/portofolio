// src/lib/github.js

export async function getGithubRepos(username) {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated`
    );

    if (!res.ok) {
      throw new Error('Failed fetch repos');
    }

    const data = await res.json();

    return data.map((repo) => ({
      id: repo.id,
      title: repo.name,
      desc: repo.description || 'No description',
      tags: repo.topics || [],
      url: repo.html_url,
      stars: repo.stargazers_count,
      language: repo.language,
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
}