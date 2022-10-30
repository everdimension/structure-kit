import React from 'react';

export const VStack = React.forwardRef(
  (
    {
      gap,
      style,
      ...props
    }: {
      gap: number;
    } & React.HTMLProps<HTMLDivElement>,
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
        style={{
          display: 'grid',
          gridGap: gap,
          gridTemplateColumns: 'minmax(0, auto)',
          ...style,
        }}
        {...props}
      />
    );
  }
);
