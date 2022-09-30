interface ParentProps {
  children: any;
}

const Parent = ({ children }: ParentProps) => {
  return <div>{children}</div>;
};

export default Parent;
