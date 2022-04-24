import { ChangeEvent, useCallback, useState } from "react";
import { RadioButtonProps } from "./CheckCircle.types";
import { Input, Label, Mark} from "./CheckCircle.styles";

export const CheckCircle: React.FC<RadioButtonProps> = ({ children, className, onChange, ...props }) => {

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChecked = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    onChange && onChange(e);
  }, []);

  return (
    <Label className={className}>
        <Input checked={isChecked} onChange={handleChecked} {...props} />
        <Mark></Mark>
      {children}
    </Label>
  );
};
