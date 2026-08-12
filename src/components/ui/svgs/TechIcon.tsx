import type { SVGProps } from "react";
import {
  SiJavascript,
  SiPython,
  SiOpenjdk,
  //   SiCsharp,
  SiPostgresql,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiDrizzle,
  SiSocketdotio,
  SiReact,
  SiRedux,
  SiReactquery,
  SiTailwindcss,
  //   SiAmazonwebservices,
  SiDocker,
  SiVercel,
  SiNetlify,
  SiJest,
  SiPostman,
  SiGit,
  SiGithub,
  SiJira,
  SiAnthropic,
  SiCursor,
  SiOllama,
  SiGooglegemini,
} from "react-icons/si";
import { TbDatabase } from "react-icons/tb";

interface IconConfig {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  color: string;
}

const iconMap: Record<string, IconConfig> = {
  // Languages
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  Python: { icon: SiPython, color: "#3776AB" },
  Java: { icon: SiOpenjdk, color: "#007396" },
  //   "C#": { icon: SiCsharp, color: "#239120" },
  SQL: { icon: TbDatabase, color: "#4479A1" },

  // Backend & Databases
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  "Express.js": { icon: SiExpress, color: "currentColor" }, // Express logo is monochromatic
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Mongoose: { icon: SiMongoose, color: "#880000" },
  "Drizzle ORM": { icon: SiDrizzle, color: "#C5F74F" },
  WebSockets: { icon: SiSocketdotio, color: "currentColor" },

  // Frontend
  React: { icon: SiReact, color: "#61DAFB" },
  "Redux Toolkit": { icon: SiRedux, color: "#764ABC" },
  "React Query": { icon: SiReactquery, color: "#FF4154" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },

  // Cloud & DevOps
  //   AWS: { icon: SiAmazonwebservices, color: "#FF9900" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Vercel: { icon: SiVercel, color: "currentColor" },
  Netlify: { icon: SiNetlify, color: "#00C7B7" },

  // Testing & Tools
  Jest: { icon: SiJest, color: "#C21325" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "currentColor" },
  JIRA: { icon: SiJira, color: "#0052CC" },

  // AI & LLM Tools
  Claude: { icon: SiAnthropic, color: "#D97757" },
  Cursor: { icon: SiCursor, color: "currentColor" },
  Ollama: { icon: SiOllama, color: "currentColor" },
  Gemini: { icon: SiGooglegemini, color: "#8E75FF" },
};

interface TechIconProps extends SVGProps<SVGSVGElement> {
  name: string;
}

export const TechIcon = ({ name, style, ...props }: TechIconProps) => {
  const config = iconMap[name];
  if (!config) return null;

  const IconComponent = config.icon;

  return <IconComponent style={{ color: config.color, ...style }} {...props} />;
};
