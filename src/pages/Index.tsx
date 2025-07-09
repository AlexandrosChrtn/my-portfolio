
import { useState, useEffect } from "react";
import { Github, ExternalLink, MessageCircle, X, User, Code, Brain, Star, GitFork, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  html_url: string;
  updated_at: string;
}

interface HuggingFaceModel {
  _id: string;
  id: string;
  likes: number;
  downloads: number;
  tags: string[];
  pipeline_tag: string;
  library_name: string;
  createdAt: string;
  modelId: string;
}

const Index = () => {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>([]);
  const [isLoadingRepos, setIsLoadingRepos] = useState(true);
  const [huggingFaceModels, setHuggingFaceModels] = useState<HuggingFaceModel[]>([]);
  const [isLoadingModels, setIsLoadingModels] = useState(true);

  // Fetch GitHub repositories and Hugging Face models
  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/AlexandrosChrtn/repos');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const repos: GitHubRepo[] = await response.json();
        
        // Sort by stars (descending) and take top 2
        const sortedRepos = repos
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 2);
        
        setGithubRepos(sortedRepos);
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        // Fallback to placeholder data on error
        setGithubRepos([
          {
            id: 1,
            name: "EmotivAI",
            description: "A slick web UI, see it on GH",
            stargazers_count: 0,
            forks_count: 0,
            language: "TypeScript",
            html_url: "https://github.com/AlexandrosChrtn/EmotivAI",
            updated_at: "2025-06-16T15:55:58Z"
          }
        ]);
      } finally {
        setIsLoadingRepos(false);
      }
    };

    const fetchHuggingFaceModels = async () => {
      try {
        const response = await fetch('https://huggingface.co/api/models?author=AlexandrosChariton');
        if (!response.ok) {
          throw new Error('Failed to fetch Hugging Face models');
        }
        const models: HuggingFaceModel[] = await response.json();
        
        // Sort by downloads (descending) and take top 2
        const sortedModels = models
          .sort((a, b) => b.downloads - a.downloads)
          .slice(0, 2);
        
        setHuggingFaceModels(sortedModels);
      } catch (error) {
        console.error('Error fetching Hugging Face models:', error);
        // Fallback to empty array on error
        setHuggingFaceModels([]);
      } finally {
        setIsLoadingModels(false);
      }
    };

    fetchGitHubRepos();
    fetchHuggingFaceModels();
  }, []);



  const skills = [
    "Python", "PyTorch", "HuggingFace", "REST APIs",
    "Batch Processing", "LLMs", "OpenAI", "Anthropic", "Gemini", "Groq", "Mistral", "TensorFlow",
    "Caching", "Concurrency", "Linux", "GCP", "Git", "Docker", "JavaScript/TypeScript", "React", "Node.js", 
    "Azure", "MySQL", "Django", "FastAPI", "Flask"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      {/* Header */}
      <header className="border-b border-orange-500/20 bg-gray-950/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-orange-400 text-xl font-bold">
            Alexandros Chariton
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-orange-400 transition-colors">about</a>
            <a href="#projects" className="hover:text-orange-400 transition-colors">projects</a>
            <a href="#integrations" className="hover:text-orange-400 transition-colors">integrations</a>
            <a href="#contact" className="hover:text-orange-400 transition-colors">contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi friend!
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            ML Engineer who loves building things. I love fast paced environments and understanding what the user wants.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="outline" 
              className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-gray-900"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Code className="mr-2 h-4 w-4" />
              View Projects
            </Button>
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-gray-900"
              onClick={() => setIsAssistantOpen(true)}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Talk to My Assistant
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-orange-400">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-orange-400 flex items-center">
                <User className="mr-2 h-5 w-5" />
                Background
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p className="mb-4">
                Developer with multiple years of experience building scalable applications
                and machine learning solutions, mostly in e-commerce. I love what I do and I see myself more of a problem solver who does what needs to be done, rather than just an ML engineer.
              </p>
              <p>
              When I'm not coding, I am doing something incredibly cool, but I can't tell you about it.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-orange-400 flex items-center">
                <Brain className="mr-2 h-5 w-5" />
                Skills & Technologies
              </CardTitle>
              <CardDescription className="text-gray-400">
                Technologies I've used in work or projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="border-orange-500/50 text-orange-300 hover:bg-orange-500/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-orange-400">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {githubRepos.slice(0, 3).map((repo) => (
            <Card key={repo.id} className="bg-gray-800 border-gray-700 hover:border-orange-500/50 transition-all group">
              <CardHeader>
                <CardTitle className="text-lg text-orange-300 group-hover:text-orange-400 transition-colors">
                  {repo.name}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {repo.description || "No description available"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span className="flex items-center">
                    <span className="w-3 h-3 bg-orange-400 rounded-full mr-2"></span>
                    {repo.language || "Unknown"}
                  </span>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center">
                      <GitFork className="w-4 h-4 mr-1" />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-orange-500/50 text-orange-300 hover:bg-orange-500/20"
                  onClick={() => window.open(repo.html_url, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View on GitHub
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-orange-400">Integrations</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* GitHub Integration */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-orange-400 flex items-center">
                <Github className="mr-2 h-5 w-5" />
                GitHub Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isLoadingRepos ? (
                <div className="space-y-3">
                  <div className="text-sm text-gray-400">Loading repositories...</div>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="animate-pulse">
                      <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {githubRepos.map((repo) => (
                    <div 
                      key={repo.id} 
                      className="border border-gray-700 rounded p-3 hover:border-orange-500/50 transition-colors cursor-pointer"
                      onClick={() => window.open(repo.html_url, '_blank')}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-semibold text-orange-300">{repo.name}</div>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <span className="flex items-center">
                            <Star className="w-3 h-3 mr-1" />
                            {repo.stargazers_count}
                          </span>
                          <span className="flex items-center">
                            <GitFork className="w-3 h-3 mr-1" />
                            {repo.forks_count}
                          </span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-400 mb-2">
                        {repo.description || "No description available"}
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500">
                          {repo.language || "Unknown"}
                        </span>
                        <span className="text-orange-400 hover:text-orange-300">
                          View Repo
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Hugging Face Integration */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-orange-400 flex items-center">
                <Brain className="mr-2 h-5 w-5" />
                Hugging Face Models
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isLoadingModels ? (
                <div className="space-y-3">
                  <div className="text-sm text-gray-400">Loading models...</div>
                  {[1, 2].map((i) => (
                    <div key={i} className="animate-pulse">
                      <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {huggingFaceModels.map((model) => (
                    <div 
                      key={model._id} 
                      className="border border-gray-700 rounded p-3 hover:border-orange-500/50 transition-colors cursor-pointer"
                      onClick={() => window.open(`https://huggingface.co/${model.id}`, '_blank')}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-semibold text-orange-300">{model.id.split('/')[1]}</div>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <span className="flex items-center">
                            <Download className="w-3 h-3 mr-1" />
                            {model.downloads}
                          </span>
                          <span className="flex items-center">
                            ❤️ {model.likes}
                          </span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-400 mb-2">
                        {model.pipeline_tag} • {model.library_name}
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500">
                          {model.tags.slice(0, 3).join(', ')}
                        </span>
                        <span className="text-orange-400 hover:text-orange-300">
                          View Model
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-orange-400">Contact</h2>
        <Card className="bg-gray-800 border-gray-700 max-w-2xl mx-auto">
          <CardContent className="p-8">
            <div className="space-y-4 text-center">
              <p className="text-gray-300 text-lg">
                Let's build something amazing together!
              </p>
              <div className="flex justify-center space-x-4">
                <Button 
                  variant="outline" 
                  className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-gray-900"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button 
                  variant="outline" 
                  className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-gray-900"
                >
                  Email Me
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-orange-500/20 bg-gray-950/50 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2025 Alexandros Chariton. Built with love and some ☕</p>
          <p className="text-sm mt-2">
            Thanks for stopping by!
          </p>
        </div>
      </footer>

      {/* Floating Assistant Button */}
      <Button
        onClick={() => setIsAssistantOpen(true)}
        className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-gray-900 rounded-full p-4 shadow-lg z-50 animate-pulse"
        size="lg"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Assistant Dialog */}
      <Dialog open={isAssistantOpen} onOpenChange={setIsAssistantOpen}>
        <DialogContent className="bg-gray-800 border-gray-700 text-gray-100">
          <DialogHeader>
            <DialogTitle className="text-orange-400 flex items-center">
              <MessageCircle className="mr-2 h-5 w-5" />
              Talk to My AI Assistant
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              Get instant help and insights about my work, projects, and expertise.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-gray-900 p-4 rounded border-l-4 border-orange-500">
              <p className="text-sm text-gray-300 mb-3">
                My custom GPT assistant can help you with:
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Questions about my projects and experience</li>
                <li>• Technical discussions and advice</li>
                <li>• Collaboration opportunities</li>
                <li>• General programming questions</li>
              </ul>
            </div>
            <div className="flex space-x-3">
              <Button 
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-gray-900"
                onClick={() => {
                  // This will link to your custom GPT
                  window.open('https://chat.openai.com/g/g-your-custom-gpt-id', '_blank');
                  setIsAssistantOpen(false);
                }}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Open Assistant
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-600 text-gray-300 hover:bg-gray-700"
                onClick={() => setIsAssistantOpen(false)}
              >
                <X className="mr-2 h-4 w-4" />
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
