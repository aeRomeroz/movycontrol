import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <Services />
      <About />
    </main>
  );
}