import Link from "next/link"

const Header = () => {
  return (
    <div className="p-2">
      LOGO AIRPORT
      <div className="flex flex-row">
        <nav className="flex flex-row">
          <li title="search bar" placeholder="Search"></li>
          <li title="Sign-up Sign-in"></li>
          <li title="Cart"></li>
          <li title="langages"></li>
          <li>Passengers</li>
        </nav>
        <nav className="flex flex-row">
          <li>
            <Link href="/flights">Flights</Link>
          </li>
          <li>
            <Link href="/access">Access</Link>
          </li>
          <li>
            <Link href="/ready">Ready</Link>
          </li>
          <li>
            <Link href="/parking">Parking</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/shoping">Shoping</Link>
          </li>
          <li>
            <Link href="/booking">Booking</Link>
          </li>
        </nav>
      </div>
    </div>
  )
}

export default Header
