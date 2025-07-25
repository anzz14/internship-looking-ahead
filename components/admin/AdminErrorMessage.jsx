export default function AdminErrorMessage({ error }) {
  if (!error) return null;
  
  return (
    <div className="p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-md">
      <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
    </div>
  );
}
