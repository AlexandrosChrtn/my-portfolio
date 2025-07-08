
import { useState } from "react";
import { Github, ExternalLink, MessageCircle, X, User, Code, Brain, Star, GitFork, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Index = () => {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  // Placeholder data - will be replaced with real API integrations
  const githubRepos = [
    {
      name: "ai-code-reviewer",
      description: "Automated code review using LLMs",
      stars: 142,
      forks: 23,
      language: "TypeScript",
      url: "#"
    },
    {
      name: "data-pipeline-optimizer",
      description: "ML pipeline optimization toolkit",
      stars: 89,
      forks: 16,
      language: "Python",
      url: "#"
    },
    {
      name: "neural-network-viz",
      description: "Interactive neural network visualizer",
      stars: 267,
      forks: 45,
      language: "JavaScript",
      url: "#"
    }
  ];

  const huggingFaceModels = [
    {
      name: "custom-code-generator",
      description: "Fine-tuned model for code generation",
      downloads: "2.1k",
      url: "#"
    },
    {
      name: "sentiment-analyzer-pro",
      description: "Advanced sentiment analysis model",
      downloads: "5.7k",
      url: "#"
    }
  ];

  const skills = [
    "JavaScript/TypeScript", "Python", "React", "Node.js", 
    "Machine Learning", "Docker", "AWS", "PostgreSQL",
    "TensorFlow", "PyTorch", "Git", "Linux"
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
            I'm a full-stack developer who speaks fluent code and dreams in algorithms.
            <br />
            Building the future, one commit at a time.
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
                Passionate developer with 5+ years of experience building scalable applications
                and machine learning solutions. I love exploring the intersection of AI and
                traditional software development.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open source projects,
                writing technical blog posts, or experimenting with the latest ML frameworks.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-orange-400 flex items-center">
                <Brain className="mr-2 h-5 w-5" />
                Skills & Technologies
              </CardTitle>
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
          {githubRepos.map((repo, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-orange-500/50 transition-all group">
              <CardHeader>
                <CardTitle className="text-lg text-orange-300 group-hover:text-orange-400 transition-colors">
                  {repo.name}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {repo.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span className="flex items-center">
                    <span className="w-3 h-3 bg-orange-400 rounded-full mr-2"></span>
                    {repo.language}
                  </span>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center">
                      <GitFork className="w-4 h-4 mr-1" />
                      {repo.forks}
                    </span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-orange-500/50 text-orange-300 hover:bg-orange-500/20"
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
              <CardDescription>Latest public repositories and contributions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-sm text-gray-400">
                  🔄 Auto-synced with GitHub API
                </div>
                <div className="text-xs text-gray-500 bg-gray-900 p-3 rounded border-l-4 border-orange-500">
                  # This section will automatically display your latest public repos
                  <br />
                  # and contributions when GitHub integration is active
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Hugging Face Integration */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-orange-400 flex items-center">
                <Brain className="mr-2 h-5 w-5" />
                Hugging Face Models
              </CardTitle>
              <CardDescription>Published ML models and datasets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {huggingFaceModels.map((model, index) => (
                  <div key={index} className="border border-gray-700 rounded p-3 hover:border-orange-500/50 transition-colors">
                    <div className="font-semibold text-orange-300">{model.name}</div>
                    <div className="text-sm text-gray-400 mb-2">{model.description}</div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="flex items-center text-gray-500">
                        <Download className="w-3 h-3 mr-1" />
                        {model.downloads} downloads
                      </span>
                      <Button variant="ghost" size="sm" className="text-orange-400 hover:text-orange-300">
                        View Model
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
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
          <p>&copy; 2024 Alexandros Chariton. Built with ❤️ and lots of ☕</p>
          <p className="text-sm mt-2">
            Thanks for visiting!
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
