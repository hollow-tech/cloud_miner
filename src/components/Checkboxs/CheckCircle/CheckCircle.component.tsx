import { ChangeEvent, useCallback, useState, useMemo } from "react";
import { RadioButtonProps } from "./CheckCircle.types";
import { Input, Label, Mark, Wrapper, MarkActive, animation } from "./CheckCircle.styles";
import { AnimatePresence } from "framer-motion";
import { useIsMounted } from "../../../hooks/useIsMounted";

export const CheckCircle: React.FC<RadioButtonProps> = ({ children, className, onChange, ...props }) => {
  const isMounted = useIsMounted();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChecked = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    onChange && onChange(e);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Label className={className}>
      <Wrapper>
        <Input checked={isChecked} onChange={handleChecked} {...props} />
        <Mark>
          <AnimatePresence>
            {isChecked && <MarkActive initial="hidden" animate="visible" exit="hidden" variants={animation} />}
          </AnimatePresence>
        </Mark>
      </Wrapper>
      {children}
    </Label>
  );
};
