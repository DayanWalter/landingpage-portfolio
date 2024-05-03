import {
  BarChart2,
  Command,
  Mail,
  MessageCircle,
  Smile,
  Zap,
} from "lucide-react";

export default function Icon({ icon }: { icon: string }) {
  // Change classes here, if necessary
  const classNames = "h-5 w-5 text-primary/60";

  // Add icons
  if (icon === "Mail") return <Mail className={classNames} />;
  if (icon === "BarChart2") return <BarChart2 className={classNames} />;
  if (icon === "Zap") return <Zap className={classNames} />;
  if (icon === "Smile") return <Smile className={classNames} />;
  if (icon === "Command") return <Command className={classNames} />;
  if (icon === "MessageCircle") return <MessageCircle className={classNames} />;
}
