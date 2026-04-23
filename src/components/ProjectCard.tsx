import { motion } from 'motion/react';
import { ExternalLink, Github, Database, Cpu, BarChart } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  index: number;
}

export default function ProjectCard({ title, description, tags, metrics, index }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="glass-panel p-8 rounded-2xl group relative overflow-hidden cursor-crosshair border-white/5 hover:border-cyan-500/30"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="space-y-1">
          <span className="text-[9px] font-bold text-slate-500 tracking-widest uppercase">Analysis_Node // 0{index + 1}</span>
          <h3 className="text-xl font-bold text-white group-hover:neo-accent transition-colors italic">
            {title}
          </h3>
        </div>
        <div className="flex space-x-3 text-slate-500">
          <Github size={16} className="hover:text-cyan-400 transition-colors" />
        </div>
      </div>
      
      <p className="text-slate-400 text-xs mb-8 leading-relaxed font-light">
        {description}
      </p>
      
      <div className="grid grid-cols-2 gap-4 mb-8 border-y border-white/5 py-4 bg-white/[0.01]">
        {metrics.map((m, i) => (
          <div key={i}>
            <div className="text-[8px] uppercase text-slate-500 font-bold tracking-widest font-mono">{m.label}</div>
            <div className="text-xs font-mono text-cyan-400">{m.value}</div>
          </div>
        ))}
      </div>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span key={i} className="px-2 py-1 bg-cyan-500/5 text-cyan-400/80 text-[9px] rounded border border-cyan-500/10 font-bold tracking-widest">
            {tag}
          </span>
        ))}
      </div>
      
      {/* Decorative circles from theme */}
      <div className="absolute -right-8 -bottom-8 w-32 h-32 border border-cyan-500/5 rounded-full pointer-events-none" />
      <div className="absolute -right-4 -bottom-4 w-24 h-24 border border-cyan-500/10 rounded-full pointer-events-none" />
    </motion.div>
  );
}
