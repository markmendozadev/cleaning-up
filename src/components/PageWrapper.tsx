import * as React from "react";
import { usePage } from "@/hooks/usePage";
import { endLoading, startLoading } from "@/lib/nprogress";

interface PageProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageProps> = ({ children }) => {
  const { onLoad } = usePage();

  const render = React.useMemo(() => {
    return <>{children}</>;
  }, [children]);

  React.useEffect(() => {
    onLoad(render);
  }, [onLoad, render]);

  React.useEffect(() => {
    endLoading();
    return () => startLoading();
  }, []);

  return render;
};

export default PageWrapper;
