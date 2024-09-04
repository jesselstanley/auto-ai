import Navbar from '../components/navbar';

export default function Manuals() {
  return (
    <div className="flex">
      <Navbar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Manuals</h1>
        <p>This page contains various manuals and documentation.</p>
      </main>
    </div>
  );
}