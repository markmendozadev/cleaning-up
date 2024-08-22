import { cn } from "@/lib/utils";
import {
  Card as CDNCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardProps = React.ComponentProps<typeof CDNCard>;

interface ICard extends CardProps {
  title: string;
  subTitle?: string;
  children: React.ReactNode;
  footer: React.ReactNode;
}

function Card({
  className,
  title,
  subTitle,
  children,
  footer,
  ...props
}: ICard) {
  return (
    <CDNCard className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle className="text-center">{title}</CardTitle>
        {subTitle && <CardDescription>{subTitle}</CardDescription>}
      </CardHeader>
      <CardContent className="grid gap-4">{children}</CardContent>
      <CardFooter>{footer}</CardFooter>
    </CDNCard>
  );
}

export default Card;
