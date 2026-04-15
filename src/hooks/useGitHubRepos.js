import { useState, useEffect } from "react";

const GITHUB_USERNAME = "Tamburini-Christofer";

const REPO_NAMES = [
  "progetto-finale-spec-frontend-front",
  "Magic-TheGathering",
  "mpq",
  "booroad-cs5-main",
  "webapp-react",
  "Junior-Ex-Front-React-blogr-landing-page-main",
  "Junior-Ex-Front-React-product-list-with-cart-main",
  "react-boolflix",
  "react-ex-weather-app-main",
  "react-movie-filter",
  "Junior-Ex-Front-sunnyside-agency-landing-page-main",
  "react-dc-comics",
  "Ex-Front-faq-accordion-main",
  "Junior-Ex_Front-browser-extensions-manager-ui-mai",
  "Junior-Ex-Front-testimonials-grid-section-main",
  "Junionr-Ex-Front-bento-grid-main",
  "Ex-Front-ping-coming-soon-page-master",
  "Ex-Front-base-apparel-coming-soon-master",
  "Ex-Front-article-preview-component-master",
  "Ex-Front-huddle-landing-page-with-single-introductory-section-maste",
  "Ex-Front-social-proof-section-master",
  "Ex-Front-profile-card-component-main",
  "Ex-Front-stats-preview-card-component-main",
  "Ex-Front-single-price-grid-component-master",
  "Ex-Front-order-summary-component-main",
  "Ex-Front-four-card-feature-section-master",
  "Ex-Front-intro-component-with-signup-form-master",
  "Ex-Front-nft-preview-card-component-main",
  "Ex-Front-interactive-rating-component-main",
  "Ex-Front-product-preview-card-component-main",
  "Ex-Front-social-links-profile-main",
  "Ex-Front-results-summary-component-main",
  "Ex-Front-3-column-preview-card-component-main",
  "Ex-Front-recipe-page-main",
  "html-css-spotifyweb",
];

const CACHE_KEY = "github_repos_cache_v2";
const CACHE_DURATION = 1000 * 60 * 60; // 1 ora

function getCachedRepos() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { timestamp, data } = JSON.parse(raw);
    if (Date.now() - timestamp > CACHE_DURATION) {
      localStorage.removeItem(CACHE_KEY);
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

function setCachedRepos(data) {
  try {
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ timestamp: Date.now(), data })
    );
  } catch {
    // quota exceeded, ignora
  }
}

export default function useGitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cached = getCachedRepos();
    if (cached) {
      setRepos(cached);
      setLoading(false);
      return;
    }

    let cancelled = false;

    async function fetchRepos() {
      try {
        const allRepos = [];
        let page = 1;
        let hasMore = true;

        while (hasMore) {
          const res = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&page=${page}&sort=updated`
          );

          if (!res.ok) {
            throw new Error(`GitHub API error: ${res.status}`);
          }

          const data = await res.json();
          allRepos.push(...data);

          hasMore = data.length === 100;
          page++;
        }

        if (cancelled) return;

        const nameSet = new Set(REPO_NAMES.map((n) => n.toLowerCase()));
        const filtered = allRepos
          .filter((r) => nameSet.has(r.name.toLowerCase()))
          .map((r) => ({
            id: r.id,
            name: r.name,
            description: r.description,
            language: r.language,
            topics: r.topics || [],
            stars: r.stargazers_count,
            url: r.html_url,
            homepage: r.homepage || null,
            defaultBranch: r.default_branch || "main",
            updatedAt: r.updated_at,
            ogImage: `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${r.name}`,
            readmeImages: [],
          }));

        // Fetch immagini dal README per ogni repo (in parallelo, con fallback)
        await Promise.all(
          filtered.map(async (repo) => {
            try {
              const res = await fetch(
                `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/readme`,
                { headers: { Accept: "application/vnd.github.v3+json" } }
              );
              if (!res.ok) return;
              const data = await res.json();
              const content = atob(data.content.replace(/\s/g, ""));

              // Estrai immagini markdown ![alt](path) — escludi URL esterni (icone devicon ecc.)
              const mdRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
              let match;
              const images = [];
              while ((match = mdRegex.exec(content)) !== null) {
                const src = match[2];
                // Ignora URL esterni (icone, badge ecc.)
                if (src.startsWith("http://") || src.startsWith("https://")) continue;
                const cleanPath = src.replace(/^\.?\//, "");
                images.push({
                  alt: match[1] || repo.name,
                  src: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo.name}/${repo.defaultBranch}/${cleanPath}`,
                });
              }
              repo.readmeImages = images;
            } catch {
              // Nessuna immagine disponibile — resta array vuoto
            }
          })
        );

        setCachedRepos(filtered);
        setRepos(filtered);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchRepos();
    return () => {
      cancelled = true;
    };
  }, []);

  return { repos, loading, error };
}
