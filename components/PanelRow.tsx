type PanelRowProps = {
  label: string;
  children: React.ReactNode;
};

const PanelRow = ({ label, children }: PanelRowProps) => {
  return (
    <div className="flex items-baseline mb-2 last:mb-0">
      <p className="w-12 mr-2 text-xs">{label}</p>
      <div className="flex flex-1">{children}</div>
    </div>
  );
};

export default PanelRow;
