import Navbar from '../components/navbar';

export default function Settings() {
  return (
    <div className="flex">
      <Navbar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Settings</h1>
        <p className="mb-4">This is a placeholder for the user settings page.</p>
        <div className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input type="text" id="username" name="username" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Your username" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Your email" />
          </div>
          <button className="px-4 py-2 bg-[#E84A2E] text-white rounded hover:bg-[#E84A2E]/80 transition duration-150 ease-in-out">
            Save Changes
          </button>
        </div>
      </main>
    </div>
  );
}