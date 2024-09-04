import Navbar from './components/navbar';

export default function Home() {
  return (
    <div className="flex">
      <Navbar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
        <p>This is the main content area for the home page.</p>
      </main>
    </div>
  );
}