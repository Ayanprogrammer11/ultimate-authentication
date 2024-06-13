import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
  label: string;
}

function FormSuccess({ label }: FormSuccessProps) {
  if (!label) return null;
  return (
    <div className="p-4 rounded-md bg-emerald-500/15 text-emerald-500 text-sm gap-x-2 flex items-center">
      <CheckCircledIcon className="h-4 w-4" />
      <p>{label}</p>
    </div>
  );
}

export default FormSuccess;
