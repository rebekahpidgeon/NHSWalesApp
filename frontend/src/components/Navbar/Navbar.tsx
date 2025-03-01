import Logo from '../../assets/snh-logo.png';

export default function Navbar() {
  return (
    <nav className="bg-nhs-blue text-white h-16 p-3 flex items-center justify-center">
        <img src={Logo} alt="logo" className="h-full" />
    </nav>
  );
}
