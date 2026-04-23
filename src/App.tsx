import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Database, BarChart3, Activity, Code, Terminal, ChevronRight } from 'lucide-react';
import ThreeBackground from './components/ThreeBackground';
import SkillViz from './components/SkillViz';
import ProjectCard from './components/ProjectCard';

const PROJECTS = [
  {
    title: "EcoPredict AI",
    description: "Predictive model for air quality index using LSTM networks and historical IoT sensor data. Achievements: 94% accuracy on peak pollution forecasts.",
    tags: ["Python", "PyTorch", "TimeSeries", "FastAPI"],
    metrics: [
      { label: "Accuracy", value: "94.2%" },
      { label: "Latency", value: "12ms" }
    ]
  },
  {
    title: "MarketSync Analytics",
    description: "Automated ETL pipeline Processing 1.2M records daily for retail trend analysis. Integrated with dynamic dashboards for real-time inventory management.",
    tags: ["SQL", "Spark", "AWS Glue", "Tableau"],
    metrics: [
      { label: "Data Vol", value: "1.2M/day" },
      { label: "Stability", value: "99.9%" }
    ]
  },
  {
    title: "NeuroClass Sentiment",
    description: "Deep learning based sentiment extraction tool optimized for sparse financial news data. Built with custom BERT embeddings.",
    tags: ["TensorFlow", "NLP", "Scikit", "Docker"],
    metrics: [
      { label: "N-Labels", value: "12 Classes" },
      { label: "F1 Score", value: "0.89" }
    ]
  }
];

const BLOG_POSTS = [
  {
    date: "OCT 24, 2026",
    title: "The Shift to Vector Databases in Modern Analytics",
    excerpt: "Understanding why traditional SQL might not be enough for the next generation of AI-driven insights..."
  },
  {
    date: "SEP 12, 2026",
    title: "B.Tech and Beyond: Engineering the Future of ML",
    excerpt: "Reflecting on four years of computer engineering and the transition into specialized data science roles..."
  }
];

export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden grid-bg">
      <div className="fixed inset-0 bg-atmosphere -z-20" />
      <ThreeBackground />
      
      {/* Sidebar Navigation */}
      <div className="fixed left-0 top-0 h-full w-64 p-8 flex flex-col justify-between z-50 hidden lg:flex">
        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-2xl font-bold tracking-tighter neo-accent italic uppercase">R. Tandon</h1>
            <p className="text-[10px] text-cyan-500/60 font-mono mt-1 tracking-widest">[ COMPUTER ENGINEER // B.TECH ]</p>
          </motion.div>
          
          <nav className="flex flex-col space-y-6">
            <a href="#about" className="text-xs font-bold text-white tracking-widest border-l-2 border-cyan-400 pl-4 hover:neo-accent transition-all uppercase">01 / OVERVIEW</a>
            <a href="#projects" className="text-xs font-bold text-slate-400 tracking-widest hover:text-white pl-4 transition-all uppercase hover:neo-accent">02 / PROJECTS</a>
            <a href="#blog" className="text-xs font-bold text-slate-400 tracking-widest hover:text-white pl-4 transition-all uppercase hover:neo-accent">03 / INSIGHTS</a>
            <a href="#contact" className="text-xs font-bold text-slate-400 tracking-widest hover:text-white pl-4 transition-all uppercase hover:neo-accent">04 / CONTACT</a>
          </nav>
        </div>

        <div className="glass-panel p-4 space-y-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Active Stream</p>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-mono text-slate-400">DATA LOAD</span>
              <span className="text-[9px] font-mono text-cyan-400">24.8%</span>
            </div>
            <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-400 w-1/4" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-mono text-slate-400">ETL PROCESS</span>
              <span className="text-[9px] font-mono text-green-400">STABLE</span>
            </div>
          </div>
        </div>
      </div>

      <main className="lg:ml-64 px-6 md:px-12 py-12">
        {/* Mobile Nav Placeholder */}
        <div className="lg:hidden flex justify-between items-center mb-12 border-b border-white/5 pb-4">
           <h1 className="text-xl font-bold tracking-tighter neo-accent italic uppercase">R. Tandon</h1>
           <Terminal className="text-cyan-400" size={20} />
        </div>
        
        {/* Hero Section */}
        <section className="mb-32 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <span className="text-xs font-bold text-cyan-500 uppercase tracking-[0.4em]">Data Science Visualization</span>
            <h2 className="text-5xl md:text-7xl font-light leading-[1.1] text-white">
              Predictive Models & <br/>
              <span className="font-bold italic neo-accent">Interactive Insights.</span>
            </h2>
            <p className="max-w-xl text-slate-400 text-base leading-relaxed pt-2">
              B.Tech in Computer Engineering with an obsession for high-dimensional data narratives and neural architecture search.
            </p>
          </motion.div>
          
          <div className="flex items-center space-x-8 mt-12">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-10 py-4 font-mono text-[10px] uppercase tracking-[0.2em] hover:bg-cyan-500/20 transition-all flex items-center"
            >
              Initialize Analytics <ChevronRight className="ml-2" size={14} />
            </motion.button>
            <div className="flex space-x-6 text-slate-500">
              <Github className="hover:neo-accent cursor-pointer transition-colors" size={20} />
              <Linkedin className="hover:neo-accent cursor-pointer transition-colors" size={20} />
            </div>
          </div>
        </section>

        {/* Stats & About */}
        <section id="about" className="flex flex-col lg:flex-row gap-12 mb-40">
          <div className="lg:w-1/2 viz-container">
            <div className="viz-card glass-panel p-8 relative overflow-hidden h-full">
              <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-8">Skill Entropy Map</h3>
              <SkillViz />
              <div className="mt-8 flex justify-between items-center border-t border-white/5 pt-6">
                <div>
                   <div className="text-3xl font-bold text-white tracking-tighter">3.85</div>
                   <div className="text-[9px] text-cyan-500 uppercase font-mono tracking-widest mt-1">GPA [B.TECH]</div>
                </div>
                <div className="text-right">
                   <div className="text-3xl font-bold text-white tracking-tighter">15+</div>
                   <div className="text-[9px] text-cyan-500 uppercase font-mono tracking-widest mt-1">MODELS_DEPLOYED</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex flex-col justify-center space-y-8 px-4">
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-cyan-500 uppercase tracking-[0.3em]">/ Core Philosophy</h3>
              <p className="text-2xl text-white font-light leading-snug">
                "Specializing in the <span className="italic font-bold">refining</span> of raw complexity into structural clarity."
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-panel p-6">
                <Database className="text-cyan-400 mb-4" size={20} />
                <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-2 italic">Data Pipelines</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Optimization of ETL workflows for petabyte-scale analysis.</p>
              </div>
              <div className="glass-panel p-6">
                <BarChart3 className="text-cyan-400 mb-4" size={20} />
                <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-2 italic">Visual Narrative</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Converting high-dimensional latent space into human insights.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="mb-40">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="font-mono text-xs text-data-accent uppercase tracking-widest mb-2">/ Deployment_Registry</h3>
              <h2 className="text-4xl font-bold text-white">Highlighted Projects</h2>
            </div>
            <div className="text-gray-500 font-mono text-[10px] hidden sm:block">
              [ SCROLL TO EXPLORE ]
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={i} {...p} index={i} />
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="mb-40">
           <div className="flex flex-col md:flex-row gap-20">
              <div className="md:w-1/3">
                <h3 className="text-xs font-bold text-cyan-500 uppercase tracking-[0.3em] mb-4">/ Intel_Stream</h3>
                <h2 className="text-4xl font-bold text-white mb-6 italic italic">Technical <br/>Insights</h2>
                <p className="text-slate-500 mb-8 text-sm leading-relaxed">
                  Periodical reflections on generative models, high-dimensional architectures, and the evolution of AI ethics.
                </p>
                <div className="glass-panel p-6 text-center border-dashed">
                   <div className="font-mono text-[9px] text-slate-500 mb-4 tracking-widest">INIT_SUBSCRIPTION_THREAD</div>
                   <input type="text" placeholder="USER@DOMAIN.X" className="bg-transparent border-b border-white/10 w-full text-center py-2 text-xs text-white focus:outline-none focus:border-cyan-400 mb-6 font-mono" />
                   <button className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest hover:text-white transition-colors">SYNC_USER</button>
                </div>
              </div>
              
              <div className="md:w-2/3 space-y-12">
                {BLOG_POSTS.map((post, i) => (
                  <motion.div 
                    key={i} 
                    className="group cursor-pointer border-b border-white/5 pb-8"
                    whileHover={{ x: 10 }}
                  >
                    <div className="font-mono text-[9px] text-cyan-500 mb-2 tracking-widest uppercase italic">{post.date} // INSIGHT_NODE</div>
                    <h4 className="text-2xl font-medium text-white group-hover:neo-accent transition-colors mb-4">{post.title}</h4>
                    <p className="text-slate-400 text-sm font-light leading-relaxed">{post.excerpt}</p>
                    <div className="mt-4 text-[9px] font-mono text-cyan-500/50">READ_FULL_THREAD →</div>
                  </motion.div>
                ))}
              </div>
           </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="border-t border-white/5 pt-24 pb-8">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
            <div className="max-w-xl">
               <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Connect // Collab</span>
               <h2 className="text-5xl md:text-7xl font-light text-white mt-4 italic leading-none">Let's build the <span className="font-bold neo-accent">Next Narrative.</span></h2>
            </div>
            <div className="text-right">
               <p className="font-mono text-cyan-400 text-lg mb-2">HELLO@RTANDON.IO</p>
               <div className="flex justify-end space-x-6 text-slate-500">
                  <Github size={20} className="hover:neo-accent cursor-pointer" />
                  <Linkedin size={20} className="hover:neo-accent cursor-pointer" />
               </div>
            </div>
          </div>
          <div className="mt-24 text-[8px] font-mono text-slate-700 flex justify-between uppercase tracking-[0.5em]">
             <span>© 2024 PRECISION_ARCH_v1</span>
             <span>LATENCY_STABLE</span>
          </div>
        </footer>
      </main>
    </div>
  );
}

