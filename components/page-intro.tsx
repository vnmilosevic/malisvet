import { Badge } from "@/components/ui/badge";

type PageIntroProps = {
  badge: string;
  title: string;
  description: string;
};

export function PageIntro({ badge, title, description }: PageIntroProps) {
  return (
    <div className="flex flex-col gap-3">
      <Badge variant="secondary" className="w-fit">
        {badge}
      </Badge>
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
        <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
