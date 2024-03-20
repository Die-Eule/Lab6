import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { Logo } from "@/components/Logo/Logo";
import { ROUTER } from "@/router/router.enum";

export default function Header() {
  return (
    <Navbar position="static" maxWidth="full" className="px-[50px]" classNames={{item: "text-small"}}>
      <NavbarBrand>
        <Link href={ROUTER.HOME}>
          <Logo />
        </Link>
      </NavbarBrand>
      <NavbarContent className="gap-10" justify="end">
        <NavbarItem>
          <Link color="foreground" href={ROUTER.LOTS}>
            Marketplace
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href={ROUTER.CREATORS}>
            Ranking
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href={ROUTER.WALLETS}>
            Connect a wallet
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="secondary" variant="solid" href={ROUTER.ACCOUNT}>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}