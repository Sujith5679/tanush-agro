import { SectionHeading } from '../components/SectionHeading';

export function Placeholder({ title }: { title: string }) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center py-24 bg-slate-50">
      <SectionHeading title={title} subtitle="This section is currently under development." centered />
    </div>
  );
}
