import { cn } from "@/utils/cn";

interface ParagraphPros extends React.HTMLProps<HTMLParagraphElement> {}

export function Paragraph({ children, className, ...props }: ParagraphPros) {
  return (
    <p
      className={cn("text-sm font-normal leading-7 md:text-lg", className)}
      {...props}
    >
      {children}
    </p>
  );
}
