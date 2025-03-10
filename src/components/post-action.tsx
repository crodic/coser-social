export default function PostActionButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex flex-1 items-center justify-center space-x-2 rounded-lg p-2 hover:bg-gray-100">
      {icon}
      <span className="text-sm text-gray-600">{label}</span>
    </button>
  );
}
