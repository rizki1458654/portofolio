import { useState, useEffect } from 'react'
import { Github, ExternalLink, Star } from 'lucide-react'

export default function Projects({ activeMember }) {
  const [repos, setRepos] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let ignore = false

    async function fetchGitHubRepos() {
      setRepos([])

      if (!activeMember?.github) return

      setIsLoading(true)

      try {
        // ambil username dari url github
        const githubUrl = activeMember.github
          .trim()
          .replace(/\/$/, '')

        const username = githubUrl.split('/').pop()

        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=20`
        )

        if (!response.ok) {
          throw new Error('GitHub API Error')
        }

        const data = await response.json()

        // filter repo
        const filteredRepos = data
          .filter(
            (repo) =>
              !repo.fork &&
              !repo.private &&
              !repo.archived
          )
          .sort(
            (a, b) =>
              b.stargazers_count - a.stargazers_count
          )
          .slice(0, 6)

        if (!ignore) {
          setRepos(filteredRepos)
        }
      } catch (error) {
        console.error(error)

        if (!ignore) {
          setRepos([])
        }
      } finally {
        if (!ignore) {
          setIsLoading(false)
        }
      }
    }

    fetchGitHubRepos()

    return () => {
      ignore = true
    }
  }, [activeMember])

  return (
    <section
      id="projects"
      className="mx-auto min-h-screen w-full max-w-6xl px-6 py-20 flex flex-col justify-center"
    >
      <div className="mb-12 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
          Live Projects
        </p>

        <h2 className="mt-4 text-4xl font-black tracking-tight">
          GitHub Repositories
        </h2>

        <p className="mt-4 text-slate-500 dark:text-slate-400">
          Repository publik milik {activeMember?.name}
        </p>
      </div>

      {isLoading ? (
        <div className="flex h-40 items-center justify-center">
          <div className="flex animate-pulse items-center gap-3 text-slate-500">
            <Github className="size-6 animate-bounce" />

            <span className="font-bold">
              Mengambil repository GitHub...
            </span>
          </div>
        </div>
      ) : repos.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <article
              key={repo.id}
              className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
            >
              <div className="mb-5 inline-flex w-fit rounded-2xl bg-indigo-100 p-3 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
                <Github className="size-6" />
              </div>

              <h3 className="text-xl font-black capitalize line-clamp-1">
                {repo.name.replace(/-/g, ' ')}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300 line-clamp-3">
                {repo.description ||
                  'Tidak ada deskripsi repository.'}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-white/10">
                <div className="flex items-center gap-3">
                  {repo.language && (
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold dark:border-white/10 dark:bg-white/5">
                      {repo.language}
                    </span>
                  )}

                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Star className="size-3" />
                    {repo.stargazers_count}
                  </div>
                </div>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-bold text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400"
                >
                  View
                  <ExternalLink className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center text-slate-500 dark:text-slate-400">
          Tidak ada repository publik yang ditemukan.
        </div>
      )}
    </section>
  )
}