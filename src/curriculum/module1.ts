import { CurriculumNode } from "./curriculum";

export const module1: CurriculumNode[] = [
  {
    label: "What's Edupunk OS?",
    level: 1,
    contentPath: "curriculum/content/general/what-is-edupunk-os.md",
    status: "U"
  },
  {
    label: "Mastery: Homebrew AI",
    level: 1,
    contentPath: "curriculum/content/mastery/homebrew-ai/1-homebrew-ai.md",
    status: "U",
    children: [
      {
        label: "I. Seamless Local AI Setup",
        level: 2,
        contentPath: "curriculum/content/mastery/homebrew-ai/1.1-seamless-local-ai-setup.md",
        status: "U",
        children: [
          {
            label: "Environment Configuration",
            level: 3,
            contentPath: "curriculum/content/mastery/homebrew-ai/1.1.1-environment-configuration.md",
            status: "U"
          },
          {
            label: "Model Deployment",
            level: 3,
            contentPath: "curriculum/content/mastery/homebrew-ai/1.1.2-model-deployment.md",
            status: "U"
          },
          {
            label: "Basic Functionality",
            level: 3,
            contentPath: "curriculum/content/mastery/homebrew-ai/1.1.3-basic-functionality.md",
            status: "U"
          }
        ]
      }
    ]
  },
  {
    label: "Markdown Test Sample",
    level: 1,
    contentPath: "curriculum/content/general/md-test-sample.md",
    status: "U"
  }
];
