export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <h1>My App</h1>
      </header>
      <main className="grow p-4">{children}</main>
      <footer className="bg-gray-200 p-4">
        <p>&copy; 2023 My App. All rights reserved.</p>
      </footer>
    </div>
  );
}
