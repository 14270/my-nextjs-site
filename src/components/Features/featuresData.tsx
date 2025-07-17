// data/featuresData.ts
import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    title: "AI-Powered",
    paragraph:
      "Advanced AI technology that recognizes, processes, and organizes your handwritten notes instantly.",
    icon: "🧠", // Use emojis or replace with SVG/icon components
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Reusable",
    paragraph:
      "Sustainable design allows you to wipe clean and reuse, eliminating paper waste while preserving your digital notes.",
    icon: "♻️",
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    title: "End-to-End Encryption",
    paragraph:
      "Your ideas stay private with military-grade encryption, ensuring complete data security and privacy.",
    icon: "🔒",
    color: "bg-purple-100 text-purple-600",
  },
];

export default featuresData;
