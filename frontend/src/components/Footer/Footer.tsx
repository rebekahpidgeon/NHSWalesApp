import { Cog, Home, Hospital, MessageCircle, Pill } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 bg-nhs-blue text-white h-12 p-3 flex items-center justify-between  w-full">
      <a className='bg-nhs-blue hover:bg-[#0051a0] active:bg-[#0051a0] p-2 rounded-md' href="/prescription">
        <Pill size={24} />
      </a>
      <a className='bg-nhs-blue hover:bg-[#0051a0] active:bg-[#0051a0] p-2 rounded-md' href="/appointments">
        <Hospital size={24} />
      </a>
      <a className='bg-nhs-blue hover:bg-[#0051a0] active:bg-[#0051a0] p-2 rounded-md' href="/">
        <Home size={24} />
      </a>
      <a className='bg-nhs-blue hover:bg-[#0051a0] active:bg-[#0051a0] p-2 rounded-md' href="/chatbot">
        <MessageCircle size={24} />
      </a>
      <a className='bg-nhs-blue hover:bg-[#0051a0] active:bg-[#0051a0] p-2 rounded-md' href="/settings">
        <Cog size={24} />
      </a>

    </footer>
  );
}
