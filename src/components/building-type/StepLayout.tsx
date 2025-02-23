
type StepLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const StepLayout = ({ title, children }: StepLayoutProps) => {
  return (
    <>
      <div className="text-center mb-12">
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      </div>
      {children}
    </>
  );
};

export default StepLayout;
