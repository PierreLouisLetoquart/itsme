import { cn } from "@/utils/cn";

interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {}

export function Heading2({ className, ...props }: HeadingProps) {
  return (
    <h2
      className={cn(
        "mb-6 text-xl font-bold tracking-tighter md:mb-10 md:text-3xl",
        className,
      )}
      {...props}
    />
  );
}
