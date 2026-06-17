interface Props {
  title: string;
  value: string | number;
}

export function StatCard({
  title,
  value,
}: Props) {
  return (
    <div className="rounded-xl border p-6 shadow-sm">
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>
    </div>
  );
}