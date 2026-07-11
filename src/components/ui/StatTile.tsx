import GlassCard from "./GlassCard";

export default function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <GlassCard className="p-6 text-center" hover={false}>
      <span className="block text-4xl font-black text-primary mb-1">{value}</span>
      <span className="text-on-surface-variant font-label-mono text-xs uppercase tracking-wider">
        {label}
      </span>
    </GlassCard>
  );
}
