import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaBook } from 'react-icons/fa';

const GitHubSection = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fallback data if GitHub API is rate-limited or offline
  const fallbackProfile = {
    avatar_url: "/images/User.png",
    name: "A. Santhosh",
    bio: "Generative AI Developer | AI/ML Engineer | Python Developer",
    public_repos: 12,
    followers: 15,
    following: 10
  };

  const fallbackRepos = [
    {
      id: 1,
      name: "RAG-Document-QA",
      description: "Generative AI chatbot leveraging LangChain, FAISS, and Hugging Face to perform semantic search over document databases.",
      language: "Python",
      stargazers_count: 3,
      forks_count: 1,
      html_url: "https://github.com/Santhosh339"
    },
    {
      id: 2,
      name: "Farming-Assist-Chatbot",
      description: "Agricultural conversational assistant powered by NLP and transformers to assist in crop management and diagnostics.",
      language: "Python",
      stargazers_count: 2,
      forks_count: 0,
      html_url: "https://github.com/Santhosh339"
    },
    {
      id: 3,
      name: "FastAPI-Sentiment-Classifier",
      description: "High-performance sentiment classification API deploying a fine-tuned BERT transformer via FastAPI routers.",
      language: "Python",
      stargazers_count: 1,
      forks_count: 0,
      html_url: "https://github.com/Santhosh339"
    }
  ];

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        // Fetch User Info
        const profileRes = await fetch('https://api.github.com/users/Santhosh339');
        if (!profileRes.ok) throw new Error('Failed to fetch profile');
        const profileData = await profileRes.json();
        setProfile(profileData);

        // Fetch Repos
        const reposRes = await fetch('https://api.github.com/users/Santhosh339/repos?sort=updated&per_page=6');
        if (!reposRes.ok) throw new Error('Failed to fetch repos');
        const reposData = await reposRes.json();
        
        // Filter out fork repositories and sort by star count
        const cleanRepos = reposData
          .filter(r => !r.fork)
          .slice(0, 3);
        setRepos(cleanRepos.length > 0 ? cleanRepos : fallbackRepos);
        setError(false);
      } catch (err) {
        console.warn('GitHub API rate limited or offline. Using portfolio fallback assets.', err);
        setProfile(fallbackProfile);
        setRepos(fallbackRepos);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const activeProfile = profile || fallbackProfile;
  const activeRepos = repos.length > 0 ? repos : fallbackRepos;

  return (
    <section id="github" className="py-24 bg-black px-6 md:px-12 border-b border-primary/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-2">Open Source Telemetry</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">GitHub Integration</h3>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Left Side: Profile Dashboard Card */}
          <div className="w-full lg:w-1/3 flex flex-col">
            <div className="p-8 glass-panel rounded-2xl border border-primary/10 flex flex-col items-center justify-between text-center h-full relative group">
              <div className="absolute top-4 right-4 text-3xl text-white/10 group-hover:text-primary/20 transition-colors duration-300">
                <FaGithub />
              </div>

              {loading ? (
                // Profile Loading Skeleton
                <div className="animate-pulse flex flex-col items-center w-full gap-4">
                  <div className="w-24 h-24 bg-white/5 rounded-full" />
                  <div className="h-6 w-3/4 bg-white/5 rounded" />
                  <div className="h-4 w-1/2 bg-white/5 rounded" />
                  <div className="grid grid-cols-3 w-full gap-4 mt-6">
                    <div className="h-12 bg-white/5 rounded" />
                    <div className="h-12 bg-white/5 rounded" />
                    <div className="h-12 bg-white/5 rounded" />
                  </div>
                </div>
              ) : (
                // Loaded profile content
                <div className="flex flex-col items-center w-full">
                  <img 
                    src={activeProfile.avatar_url} 
                    alt="Santhosh Avatar" 
                    className="w-24 h-24 rounded-full border border-primary/30 p-1 mb-4 object-cover" 
                  />
                  <h4 className="text-xl font-bold text-white mb-1">{activeProfile.name || "A. Santhosh"}</h4>
                  <span className="text-xs text-primary font-semibold tracking-wider uppercase mb-4">@Santhosh339</span>
                  <p className="text-textSilver text-sm leading-relaxed mb-8">
                    {activeProfile.bio || "Generative AI Developer | AI/ML Engineer | Python Developer"}
                  </p>

                  {/* GitHub Statistics Grid */}
                  <div className="grid grid-cols-3 w-full border-t border-white/5 pt-6 gap-2">
                    <div className="flex flex-col items-center">
                      <span className="text-xl font-black text-white">{activeProfile.public_repos}</span>
                      <span className="text-[10px] text-textSilver uppercase tracking-wider mt-1">Repos</span>
                    </div>
                    <div className="flex flex-col items-center border-x border-white/5">
                      <span className="text-xl font-black text-white">{activeProfile.followers}</span>
                      <span className="text-[10px] text-textSilver uppercase tracking-wider mt-1">Followers</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-xl font-black text-white">{activeProfile.following}</span>
                      <span className="text-[10px] text-textSilver uppercase tracking-wider mt-1">Following</span>
                    </div>
                  </div>
                </div>
              )}

              <a 
                href="https://github.com/Santhosh339" 
                target="_blank" 
                rel="noreferrer"
                className="mt-8 px-6 py-3 border border-primary/20 text-xs font-semibold text-primary hover:bg-primary hover:text-white rounded-lg transition-all shadow-neon duration-300 w-full text-center block clickable"
              >
                Visit GitHub Profile
              </a>
            </div>
          </div>

          {/* Right Side: Active Repositories List */}
          <div className="w-full lg:w-2/3 flex flex-col justify-between gap-6">
            {loading ? (
              // Repositories loading skeleton
              Array(3).fill(0).map((_, idx) => (
                <div key={idx} className="p-6 glass-panel rounded-2xl border border-primary/10 animate-pulse flex flex-col gap-3">
                  <div className="h-6 w-1/3 bg-white/5 rounded" />
                  <div className="h-4 w-3/4 bg-white/5 rounded" />
                  <div className="h-4 w-1/4 bg-white/5 rounded" />
                </div>
              ))
            ) : (
              // Loaded repositories list
              activeRepos.map((repo) => (
                <motion.div
                  key={repo.id}
                  whileHover={{ borderColor: "rgba(255, 0, 79, 0.3)", backgroundColor: "rgba(255, 0, 79, 0.01)" }}
                  className="p-6 glass-panel rounded-2xl border border-primary/10 transition-colors duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group"
                >
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <FaBook className="text-primary/70 text-sm" />
                      <h4 className="text-lg font-bold text-white leading-tight group-hover:text-primary transition-colors duration-300">
                        {repo.name}
                      </h4>
                    </div>
                    <p className="text-textSilver text-sm leading-relaxed mb-3">
                      {repo.description || "Open source repository containing Python scripts and ML pipelines."}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-primary/10 text-primary border border-primary/20">
                        {repo.language || "Python"}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 self-end md:self-auto border-t md:border-t-0 border-white/5 pt-3 md:pt-0 w-full md:w-auto justify-end">
                    <div className="flex items-center gap-1.5 text-textSilver text-sm">
                      <FaStar />
                      <span className="font-semibold">{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-textSilver text-sm">
                      <FaCodeBranch />
                      <span className="font-semibold">{repo.forks_count}</span>
                    </div>
                    <a 
                      href={repo.html_url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-2.5 rounded-lg bg-white/5 hover:bg-primary hover:text-white border border-white/10 transition-all duration-200 clickable"
                      aria-label="View Repository"
                    >
                      <FaGithub className="text-base" />
                    </a>
                  </div>
                </motion.div>
              ))
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default GitHubSection;
