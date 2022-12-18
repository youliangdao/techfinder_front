import React from 'react';

export type Category = {
  title: string;
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  > | null;
};

export type Categories = {
  categories: Category[];
};
