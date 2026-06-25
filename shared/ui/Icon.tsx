// shared/ui/Icon.tsx
import Image from "next/image";
import { iconMap, type IconName } from "../icons/icon-mapper";

type Props = {
  name: IconName;
  size?: number;
  className?: string;
  inverted?: boolean;
};

export function Icon({ name, size = 24, className, inverted = true }: Props) {
  return (
    <Image
      src={iconMap[name]}
      alt={name}
      width={size}
      height={size}
      className={[inverted ? "invert" : "", className ?? ""].join(" ")}
    />
  );
}
