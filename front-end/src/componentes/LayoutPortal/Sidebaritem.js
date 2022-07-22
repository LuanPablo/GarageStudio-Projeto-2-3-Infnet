import { Nav } from "react-bootstrap";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export function SidebarItem ({ item }) {
  const { pathname } = useResolvedPath(item.to)
  const match = useMatch({ path: pathname, end: item.checkAllPath })
  return (
    <Nav.Item>
      <Nav.Link active={match} as={Link} to={item.to} className='text-white'>{item.text}</Nav.Link>
    </Nav.Item>
  )
}