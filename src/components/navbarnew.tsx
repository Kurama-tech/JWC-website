import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
        <Menu>
      <MenuHandler>
        <Button>Open Nested Menu</Button>
      </MenuHandler>
      <MenuList>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <Menu placement="right-start" offset={15}>
          <MenuHandler>
            <MenuItem>Nested Item</MenuItem>
          </MenuHandler>
          <MenuList>
            <MenuItem>Nested Item 1</MenuItem>
            <MenuItem>Nested Item 2</MenuItem>
            <MenuItem>Nested Item 3</MenuItem>
          </MenuList>
        </Menu>
        <MenuItem>Menu Item 3</MenuItem>
        <Menu placement="right-start" offset={15}>
          <MenuHandler>
            <MenuItem>Nested Item 2</MenuItem>
          </MenuHandler>
          <MenuList>
            <MenuItem>Nested2 Item 1</MenuItem>
            <MenuItem>Nested2 Item 2</MenuItem>
            <MenuItem>Neste2 Item 3</MenuItem>
          </MenuList>
        </Menu>
      </MenuList>
    </Menu>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
