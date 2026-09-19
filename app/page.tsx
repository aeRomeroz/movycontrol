import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <div className="p-10 text-center text-slate-400">
        Próxima sección: Hero Component...
      </div>
    </main>
  );
}