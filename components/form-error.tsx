import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  label: string;
}

function FormError({ label }: FormErrorProps) {
  if (!label) return null;
  return (
    <div className="p-4 rounded-md bg-destructive/15 text-destructive text-sm gap-x-2 flex items-center">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p>{label}</p>
    </div>
  );
}

export default FormError;
