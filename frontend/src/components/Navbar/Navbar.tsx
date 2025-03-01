import Logo from '../../assets/snh-logo.png';

interface NavbarProps {
  showLogo?: boolean;
  title?: string;
}

export default function Navbar(props: NavbarProps) {
  return (
    <nav className="bg-nhs-blue text-white h-16 p-3 flex items-center justify-center">
      {
        props.showLogo && (
          <img src={Logo} alt="logo" className="h-full" />)
      }
      {props.title && (
        <h1 className="text-xl font-semibold">{props.title}</h1>
      )}
    </nav>
  );
}
