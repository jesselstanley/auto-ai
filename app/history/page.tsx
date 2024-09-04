import Navbar from '../components/navbar';

export default function History() {
  return (
    <div className="flex">
      <Navbar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">History</h1>
        <p>This page shows the history and past events.</p>
      </main>
    </div>
  );
}