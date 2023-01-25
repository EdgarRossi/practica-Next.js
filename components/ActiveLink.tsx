import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties } from "react";

interface ActiveLinkProps {
  text: string;
  href: string;
}

const style: CSSProperties = {
  //se le agrega esta propiedad de React para que pasen todos los props en los estilos
  color: "#0070f3",
  textDecoration: "underline",
};

export const ActiveLink = ({ text, href }: ActiveLinkProps) => {
  const { asPath } = useRouter();

  return (
    //cambiamos el null por el undefined
    <Link href={href} style={asPath === href ? style : undefined}>
      {text}
    </Link>
  );
};
