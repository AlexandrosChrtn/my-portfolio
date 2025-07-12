
import { useState, useEffect } from "react";
import { Github, ExternalLink, MessageCircle, User, Code, Brain, Star, GitFork, Download, Mail, Linkedin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>([]);
  const [isLoadingRepos, setIsLoadingRepos] = useState(true);
  const [huggingFaceModels, setHuggingFaceModels] = useState<HuggingFaceModel[]>([]);
  const [isLoadingModels, setIsLoadingModels] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fetch GitHub repositories and Hugging Face models
  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await fetch('https://my-custom-gpt-apis.onrender.com/portfolio-data');
        if (!response.ok) {
          throw new Error('Failed to fetch portfolio data');
        }
        const data = await response.json();
        
        // Set GitHub repos from backend response
        setGithubRepos(data.github_repos || []);
        
        // Set Hugging Face models from backend response
        setHuggingFaceModels(data.huggingface_models || []);
        
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
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
        setHuggingFaceModels([]);
      } finally {
        setIsLoadingRepos(false);
        setIsLoadingModels(false);
      }
    };

    fetchPortfolioData();
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
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-orange-400 transition-colors">about</a>
            <a href="#projects" className="hover:text-orange-400 transition-colors">projects</a>
            <a href="#integrations" className="hover:text-orange-400 transition-colors">integrations</a>
            <a href="#contact" className="hover:text-orange-400 transition-colors">contact</a>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="md:hidden text-orange-400 hover:text-orange-300 hover:bg-orange-500/20"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[300px] sm:w-[400px] bg-gray-950 border-l border-orange-500/20"
            >
              <nav className="flex flex-col space-y-6 mt-8">
                <a 
                  href="#about" 
                  className="text-lg text-gray-300 hover:text-orange-400 transition-colors border-b border-gray-800 pb-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  about
                </a>
                <a 
                  href="#projects" 
                  className="text-lg text-gray-300 hover:text-orange-400 transition-colors border-b border-gray-800 pb-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  projects
                </a>
                <a 
                  href="#integrations" 
                  className="text-lg text-gray-300 hover:text-orange-400 transition-colors border-b border-gray-800 pb-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  integrations
                </a>
                <a 
                  href="#contact" 
                  className="text-lg text-gray-300 hover:text-orange-400 transition-colors border-b border-gray-800 pb-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  contact
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi friend!
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            I'm Alex, an ML Engineer who loves building things. I love fast paced environments, feedback loops and my goal is to solve valuable real-world problems.
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
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Contact Me
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
                    className="border-orange-500 text-orange-400 hover:bg-orange-500/20"
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
          {/* Example Project with Multiple Links */}
          <Card className="bg-gray-800 border-gray-700 hover:border-orange-500/50 transition-all group">
            <CardHeader>
              <CardTitle className="text-lg text-orange-300 group-hover:text-orange-400 transition-colors">
                Llama Fine-Tuning Guide
              </CardTitle>
              <CardDescription className="text-gray-400">
                A comprehensive guide on fine-tuning Llama 3.2 Instruct on your own data with code examples.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="border-orange-500/50 text-orange-300">
                    Medium
                  </Badge>
                  <Badge variant="outline" className="border-orange-500/50 text-orange-300">
                    GitHub
                  </Badge>
                </div>
              </div>
              <div className="space-y-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-orange-500 text-orange-400 hover:bg-orange-500/20"
                  onClick={() => window.open('https://medium.com/@alexandros_chariton/how-to-fine-tune-llama-3-2-instruct-on-your-own-data-a-detailed-guide-e5f522f397d7', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Read on Medium
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-orange-500 text-orange-400 hover:bg-orange-500/20"
                  onClick={() => window.open('https://github.com/AlexandrosChrtn/llama-fine-tune-guide', '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* AI Reddit Comment Generation Project */}
          <Card className="bg-gray-800 border-gray-700 hover:border-orange-500/50 transition-all group">
              <CardHeader>
                <CardTitle className="text-lg text-orange-300 group-hover:text-orange-400 transition-colors">
                AI Reddit Comment Generation
                </CardTitle>
                <CardDescription className="text-gray-400">
                A fine-tuned LLM from Mistral to generate top comments for Reddit that earned me a top 5% commenter badge.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="border-orange-500/50 text-orange-300">
                    Medium
                  </Badge>
                  <Badge variant="outline" className="border-orange-500/50 text-orange-300">
                    GitHub
                  </Badge>
                </div>
              </div>
              <div className="space-y-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-orange-500 text-orange-400 hover:bg-orange-500/20"
                  onClick={() => window.open('https://medium.com/@alexandros_chariton/engaging-reddit-comment-generation-with-multimodal-generative-ai-fine-tuning-pixtral-for-social-51a05f5bc208', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Read on Medium
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-orange-500 text-orange-400 hover:bg-orange-500/20"
                  onClick={() => window.open('https://github.com/AlexandrosChrtn/pixtral-finetune', '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
                  </div>
            </CardContent>
                    </Card>

          {/* Personal AI Assistant Project */}
          <Card className="bg-gray-800 border-gray-700 hover:border-orange-500/50 transition-all group">
            <CardHeader>
              <CardTitle className="text-lg text-orange-300 group-hover:text-orange-400 transition-colors">
                Personal AI Assistant
              </CardTitle>
              <CardDescription className="text-gray-400">
                A customGPT I made to introduce myself in a more interactive way. It tends to oversell things but it's pretty cool!
              </CardDescription>
            </CardHeader>
                        <CardContent>
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
 
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="border-orange-500/50 text-orange-300">
                    ChatGPT
                  </Badge>
                  <Badge variant="outline" className="border-orange-500/50 text-orange-300">
                    GitHub
                  </Badge>
                </div>
              </div>
              <div className="space-y-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-orange-500 text-orange-400 hover:bg-orange-500/20"
                  onClick={() => window.open('https://chatgpt.com/g/g-6860256211d4819192099591edd4d803-alexandros-chariton-v2-0', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Try Assistant
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-orange-500 text-orange-400 hover:bg-orange-500/20"
                  onClick={() => window.open('https://github.com/AlexandrosChrtn/MyCustomGPT-actions', '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Knowledge Distillation Tutorial Project */}
          <Card className="bg-gray-800 border-gray-700 hover:border-orange-500/50 transition-all group">
            <CardHeader>
              <CardTitle className="text-lg text-orange-300 group-hover:text-orange-400 transition-colors">
                Knowledge Distillation PyTorch Tutorial
              </CardTitle>
              <CardDescription className="text-gray-400">
                An easy to follow tutorial explaining the reasoning behind the Knowledge Distillation method with logits as targets instead of hard labels in classification. Was hosted in the official PyTorch tutorial website.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
 
                <Badge variant="outline" className="border-orange-500/50 text-orange-300">
                  PyTorch
                </Badge>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full border-orange-500 text-orange-400 hover:bg-orange-500/20"
                onClick={() => window.open('https://docs.pytorch.org/tutorials/beginner/knowledge_distillation_tutorial.html', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Tutorial
              </Button>
            </CardContent>
          </Card>

          {/* AI Math Olympiad Project */}
          <Card className="bg-gray-800 border-gray-700 hover:border-orange-500/50 transition-all group">
            <CardHeader>
              <CardTitle className="text-lg text-orange-300 group-hover:text-orange-400 transition-colors">
                AI Math Olympiad Competition - Progress Prize 1
              </CardTitle>
              <CardDescription className="text-gray-400">
                Finished top 8%. Created a notebook that leveraged LLMs to solve problems for Mathematical Olympiads. Worked in agentic mode with DeepSeek-math-7B with code execution.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
 
                <Badge variant="outline" className="border-orange-500/50 text-orange-300">
                  Kaggle
                </Badge>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full border-orange-500 text-orange-400 hover:bg-orange-500/20"
                onClick={() => window.open('https://www.kaggle.com/competitions/ai-mathematical-olympiad-prize/', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Competition
              </Button>
            </CardContent>
          </Card>

          {/* Child Mind Institute Sleep Detection Project */}
          <Card className="bg-gray-800 border-gray-700 hover:border-orange-500/50 transition-all group">
            <CardHeader>
              <CardTitle className="text-lg text-orange-300 group-hover:text-orange-400 transition-colors">
                Child Mind Institute Competition - Detect Sleep States
              </CardTitle>
              <CardDescription className="text-gray-400">
                Finished top 15%. This was a timeseries classification competition, identifying patterns of sleep onset and wake from accelerometer data from multiple subjects across many days.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
 
                <Badge variant="outline" className="border-orange-500/50 text-orange-300">
                  Kaggle
                </Badge>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full border-orange-500 text-orange-400 hover:bg-orange-500/20"
                onClick={() => window.open('https://www.kaggle.com/competitions/child-mind-institute-detect-sleep-states', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Competition
              </Button>
            </CardContent>
          </Card>

          {/* ISIC Skin Cancer Detection Project */}
          <Card className="bg-gray-800 border-gray-700 hover:border-orange-500/50 transition-all group">
            <CardHeader>
              <CardTitle className="text-lg text-orange-300 group-hover:text-orange-400 transition-colors">
                ISIC 2024 - Skin Cancer Detection
              </CardTitle>
              <CardDescription className="text-gray-400">
                Finished top 13% (374/2740 teams). Our solutions incorporated tabular and image data. Landed 70/2740 on the efficiency leaderboard that accounted for speed and accuracy.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
 
                <Badge variant="outline" className="border-orange-500/50 text-orange-300">
                  Kaggle
                </Badge>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full border-orange-500 text-orange-400 hover:bg-orange-500/20"
                onClick={() => window.open('https://www.kaggle.com/competitions/isic-2024-challenge/overview', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Competition
              </Button>
            </CardContent>
          </Card>

          {/* Melpogram Website Project */}
          <Card className="bg-gray-800 border-gray-700 hover:border-orange-500/50 transition-all group">
            <CardHeader>
              <CardTitle className="text-lg text-orange-300 group-hover:text-orange-400 transition-colors">
                Melpogram.com
              </CardTitle>
              <CardDescription className="text-gray-400">
                A website I created using Lovable, Supabase and iterations with Cursor, as I was curious about the limits of LLMs in vibe coding. It is supposed to generate fresh images and inspirational quotes with AI.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
 
                <Badge variant="outline" className="border-orange-500/50 text-orange-300">
                  Website
                </Badge>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full border-orange-500 text-orange-400 hover:bg-orange-500/20"
                onClick={() => window.open('https://melpogram.com', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit Website
              </Button>
            </CardContent>
          </Card>

          {/* Neural Processing Letters Publication */}
          <Card className="bg-gray-800 border-gray-700 hover:border-orange-500/50 transition-all group">
            <CardHeader>
              <CardTitle className="text-lg text-orange-300 group-hover:text-orange-400 transition-colors">
                Mutual Information Distillation
              </CardTitle>
              <CardDescription className="text-gray-400">
                Proposed a novel methodology for knowledge distillation using an additional objective and optimized the process in photonic neural networks which are faster but can only simulate a handful of activation functions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
 
                <Badge variant="outline" className="border-orange-500/50 text-orange-300">
                  Research Paper
                </Badge>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full border-orange-500 text-orange-400 hover:bg-orange-500/20"
                onClick={() => window.open('https://link.springer.com/article/10.1007/s11063-023-11170-y', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Read Paper
                </Button>
              </CardContent>
            </Card>
            
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
            <div className="space-y-6 text-center">
              <p className="text-gray-300 text-lg">
                Let's build something amazing together!
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2 text-gray-300">
                  <Mail className="h-4 w-4 text-orange-400" />
                  <span>alexandros at chariton.gr</span>
                </div>
              </div>

              <div className="flex justify-center space-x-4 flex-wrap gap-2">
                <Button 
                  variant="outline" 
                  className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-gray-900"
                  onClick={() => window.open('https://github.com/AlexandrosChrtn', '_blank')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button 
                  variant="outline" 
                  className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-gray-900"
                  onClick={() => window.open('https://x.com/alexchrtn', '_blank')}
                >
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  Twitter
                </Button>
                <Button 
                  variant="outline" 
                  className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-gray-900"
                  onClick={() => window.open('https://linkedin.com/in/alexandros-chariton', '_blank')}
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
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


    </div>
  );
};

export default Index;
