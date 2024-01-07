import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Image from 'next/image'

const Navigation = () => {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Image
              src="/pondero_logo_white.svg"
              alt="Pondero Logo"
              width={200}
              height={52}
              priority
            />
      </NavbarBrand>
      <NavbarContent justify="center" className='hidden sm:flex gap-4'>
        <NavbarItem>
          {/* FIX */}
          <Link href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          {/* FIX */}
          <Link href="/" color="foreground">
            <b>Pricing</b>
          </Link>
        </NavbarItem>
        <NavbarItem>
          {/* FIX */}
          <Link href="/" color="foreground">
            <b>About Us</b>
          </Link>
        </NavbarItem>
        <NavbarItem>
          {/* FIX */}
          <Link href="/" color="foreground">
            <b>Contact</b>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Navigation