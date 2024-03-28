import ColContainer from "./ColContainer";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

type SearchInputProps = {
  className?: string;
} & InputProps;

export default function SearchInput({ className, ...props }: SearchInputProps) {
  const defaultClasses = "w-100 px-4 py-2 rounded-5";
  return (
    <ColContainer>
      <input className={`${defaultClasses} ${className}`} {...props} />
    </ColContainer>
  );
}
