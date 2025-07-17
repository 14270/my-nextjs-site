export interface Feature {
  id: number;
  title: string;
  paragraph: string;
  icon: string; // Icon name or path (can be replaced by component)
  color: string; // Tailwind color class for icon background
  description?: string; // ✅ Add this line
}
