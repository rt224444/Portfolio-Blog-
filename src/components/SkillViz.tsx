import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  { subject: 'Python', A: 120, fullMark: 150 },
  { subject: 'SQL', A: 110, fullMark: 150 },
  { subject: 'ML Frameworks', A: 100, fullMark: 150 },
  { subject: 'Visualization', A: 115, fullMark: 150 },
  { subject: 'Data Ethics', A: 90, fullMark: 150 },
  { subject: 'DevOps', A: 70, fullMark: 150 },
];

export default function SkillViz() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#333" />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: '#9ca3af', fontSize: 10 }}
          />
          <Radar
            name="Skills"
            dataKey="A"
            stroke="#22d3ee"
            fill="#22d3ee"
            fillOpacity={0.4}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
