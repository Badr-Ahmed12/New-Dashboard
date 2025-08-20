export default function StatsCard({ title, value, description, icon, bgColor, textColor }) {
    return (
      <div
        className="rounded-lg shadow-md p-4 transition duration-200 hover:shadow-xl"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">{value}</h3>
            <p className="text-sm opacity-80">{title}</p>
          </div>
          <div>{icon}</div>
        </div>
        <p className="mt-2 text-xs opacity-70">{description}</p>
      </div>
    );
  }
  