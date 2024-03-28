type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

type SearchInputProps = {
  className?: string;
} & InputProps;

export default function Input({ className, ...props }: SearchInputProps) {
  const defaultClasses = "px-2 py-2 rounded-5 bg-transparent default-input";
  return <input className={`${defaultClasses} ${className}`} {...props} />;
}
