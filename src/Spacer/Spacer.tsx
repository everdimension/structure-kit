import React from 'react';

export function Spacer({
  height,
  ...props
}: { height: number } & React.HTMLAttributes<HTMLDivElement>) {
  return <div style={{ height }} {...props} />;
}
