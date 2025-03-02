import { Cog, Home, Hospital, MessageCircle, Pill } from "lucide-react";

export enum ActiveTab {
  PRESCRIPTION = "PRESCRIPTION",
  APPOINTMENTS = "APPOINTMENTS",
  HOME = "HOME",
  CHATBOT = "CHATBOT",
  SETTINGS = "SETTINGS",
}

const tabs = [
  { href: "/prescription", icon: <Pill size={24} />, key: ActiveTab.PRESCRIPTION },
  { href: "/appointments", icon: <Hospital size={24} />, key: ActiveTab.APPOINTMENTS },
  { href: "/", icon: <Home size={24} />, key: ActiveTab.HOME },
  { href: "/chatbot", icon: <MessageCircle size={24} />, key: ActiveTab.CHATBOT },
  { href: "/settings", icon: <Cog size={24} />, key: ActiveTab.SETTINGS },
];

interface FooterProps {
  activeTab: ActiveTab;
}

export default function Footer(props: FooterProps) {

  return (
    <footer className="absolute bottom-0 bg-nhs-blue text-white h-12 p-3 flex items-center justify-between w-full">
      {tabs.map(({ href, icon, key }) => (
        <a
          key={href}
          className={`p-2 rounded-md transition-colors ${props.activeTab === key ? "bg-[#0051a0]" : "bg-nhs-blue hover:bg-[#0051a0]"
            }`}
          href={href}
        >
          {icon}
        </a>
      ))}
    </footer>
  );
}
