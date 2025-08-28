export async function GET() {
  const username = "getsurajmittal"; // replace with your GitHub handle
  const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`, {
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  if (!res.ok) {
    return new Response(JSON.stringify({ error: "Failed to fetch repos" }), { status: 500 });
  }

  const repos = await res.json();
  
  // Filter out forked repos and only keep top ones
  const filtered = repos
    .filter(repo => !repo.fork)
    .slice(0, 6)
    .map(repo => ({
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      stars: repo.stargazers_count,
      language: repo.language,
    }));

  return new Response(JSON.stringify(filtered), {
    headers: { "Content-Type": "application/json" },
  });
}
