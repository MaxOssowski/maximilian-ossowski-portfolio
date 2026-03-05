export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

export const projects: Project[] = [
  {
    title: "AI Workflow Companion",
    description:
      "A prototype assistant that combines prompt templates, task context, and execution logs to accelerate day-to-day automation work.",
    technologies: ["TypeScript", "Node.js", "OpenAI API", "SQLite"],
    githubUrl: "https://github.com/MaxOssowski/ai-workflow-companion",
  },
  {
    title: "Banking Automation Toolkit",
    description:
      "A modular toolkit for enterprise RPA pipelines, emphasizing observability, recoverability, and maintainable process orchestration.",
    technologies: ["UiPath", "C#", "SQL", "REST APIs"],
    githubUrl: "https://github.com/MaxOssowski/banking-automation-toolkit",
  },
  {
    title: "Retro Logic Analyzer",
    description:
      "An experimental hardware-software utility for analyzing signal behavior in retro electronics and reverse-engineering workflows.",
    technologies: ["Python", "Embedded C", "Serial I/O", "Data Visualization"],
    githubUrl: "https://github.com/MaxOssowski/retro-logic-analyzer",
  },
];
