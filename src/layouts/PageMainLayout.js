export default function PageMainLayout(props) {
  const { children } = props;
  return (
    <>
      <div className="flex bg-[radial-gradient(at_center_top,_#184353,_#1B2838,_#1B2838)]">
          <div className="w-screen flex justify-between pb-10">
            <div className="flex-1">{/* side left */}</div>
            <div className="flex-[2_1_0%]">{children}</div>
            <div className="flex-1">{/* side right */}</div>
          </div>
      </div>
    </>
  );
}
