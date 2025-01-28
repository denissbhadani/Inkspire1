import { cn } from "@/lib/utils";

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  // Ensure two decimal places
  const stringValue = value.toFixed(2);
  // Split into integer and decimal parts
  const [intValue, floatValue] = stringValue.split(".");

  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xl align-baseline">₹</span>
      {intValue}
      <span className="text-sm">.{floatValue}</span>
    </p>
  );
};

export default ProductPrice;
