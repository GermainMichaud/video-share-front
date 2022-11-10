import { FC, PropsWithChildren } from 'react';

type WrapperProps = PropsWithChildren;

const Wrapper: FC<WrapperProps> = ({ children }) => (
  <main className="flex flex-1 flex-col mx-auto w-full max-w-[1200px] p-2 md:p-4 min-h-[100vh]">
    {children}
  </main>
);

export default Wrapper;
