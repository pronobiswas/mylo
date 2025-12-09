type TitleSpanProps = {
    children: React.ReactNode;
  };
  
  export default function TitleSpan({ children }: TitleSpanProps) {
    return (
      <span className="bg-emerald-900/60 px-2 py-1 rounded-lg border-b-4 border-emerald-300">
        {children}
      </span>
    );
  }
  
  