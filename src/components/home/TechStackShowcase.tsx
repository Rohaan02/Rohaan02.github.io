import {
  SiDocker,
  SiExpress,
  SiGo,
  SiMongodb,
  SiMysql,
  SiN8N,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiRubyonrails,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import type { IconType } from "react-icons";

type TechItem = {
  name: string;
  Icon: IconType;
  color: string;
};

const techStack: TechItem[] = [
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Express.js", Icon: SiExpress, color: "#ffffff" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "AWS", Icon: FaAws, color: "#FF9900" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "Redux", Icon: SiRedux, color: "#764ABC" },
  { name: "Go", Icon: SiGo, color: "#00ADD8" },
  { name: "Ruby on Rails", Icon: SiRubyonrails, color: "#D30001" },
  { name: "n8n Automation", Icon: SiN8N, color: "#EA4B71" },
  { name: "WordPress", Icon: SiWordpress, color: "#21759B" },
];

const floatDelays = ["0s", "0.7s", "1.4s", "2.1s", "2.8s"];

export default function TechStackShowcase() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-primary/10 blur-[100px] -z-10 rounded-full scale-150" />
      <div className="grid grid-cols-4 gap-3 sm:gap-4 place-items-center py-6">
        {techStack.map(({ name, Icon, color }, i) => (
          <div
            key={name}
            title={name}
            className="tag-float glass-card w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center glow-hover transition-all"
            style={{ animationDelay: floatDelays[i % floatDelays.length] }}
          >
            <Icon size={28} color={color} aria-label={name} />
          </div>
        ))}
        <div
          title="REST APIs"
          className="tag-float glass-card w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center glow-hover transition-all"
          style={{ animationDelay: floatDelays[techStack.length % floatDelays.length] }}
        >
          <span className="material-symbols-outlined text-primary text-3xl" aria-label="REST APIs">
            api
          </span>
        </div>
      </div>
    </div>
  );
}
