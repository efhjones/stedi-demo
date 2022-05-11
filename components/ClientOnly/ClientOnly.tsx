// From Josh Comeau's "The Perils of Rehydration": https://www.joshwcomeau.com/react/the-perils-of-rehydration/

import { FC, useState, useEffect } from "react";

const ClientOnly: FC<any> = ({ children, ...delegated }) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return <div {...delegated}>{children}</div>;
};

export default ClientOnly;
