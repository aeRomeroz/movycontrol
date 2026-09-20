import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <div className="p-10 text-center text-slate-500">
        Próxima sección: Services Component...
      </div>
    </main>
  );
}