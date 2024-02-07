import { LinkIcon, ExternalLinkIcon } from "@/utils/icon";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  linkIcon?: React.ReactNode;
};

export const projects = [
  {
    title: "Adapt local LLM to ur needs",
    description:
      "The world is changing blazingly fast, and you must adapt to it. This project is about how to adapt local LLM to your needs.",
    tags: ["Rust", "Ollama", "LLM", "Tauri"],
    link: "#",
    linkIcon: <ExternalLinkIcon className="h-4 w-4 md:h-5 md:w-5" />,
  },
  {
    title: "Dynamic binary visualization",
    description:
      "This simple algorithm aims to take in input an unknown raw binary and generate a visualization of it. Trying to find some patterns in th egenerated image can help to understand the binary.",
    tags: ["Rust", "Image processing", "Binary", "Visualization"],
    link: "#",
    linkIcon: <LinkIcon className="h-4 w-4 md:h-5 md:w-5" />,
  },
  {
    title: "Can Gzip coupled with a KNN beat BERT",
    description:
      'This project aims to compare the performance of a simple Gzip algorithm coupled with a KNN to the BERT model. This a reproduction of the paper "Less is more" written by Zhiying Jiang.',
    tags: ["Python", "Gzip", "KNN", "BERT", "NLP", "Classification"],
    link: "#",
    linkIcon: <ExternalLinkIcon className="h-4 w-4 md:h-5 md:w-5" />,
  },
] satisfies Project[];
