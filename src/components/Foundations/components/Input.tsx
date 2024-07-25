"use client";
import { mergeClasses } from "@/helpers/mergeClasses";
import { HTMLMotionProps, motion } from "framer-motion";
import {
  ChangeEvent,
  FocusEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Paragraph } from "../../Typography";

export type BaseInputProps = {
  /** Whether the value in the input field is valid or not */
  valid?: boolean;
  /** This is the floating label to be displayed as a placeholder as well */
  staticLabel?: string;
  /** This is the helper text to display if there is a validation error */
  helperText?: string;
  /** Add right component to your input. Usually used for displaying icon */
  rightAccessoryView?: React.ReactNode;
  /** Add left component to your input. Usually used for displaying icon */
  leftAccessoryView?: React.ReactNode;
} & HTMLMotionProps<"input">;

const inputVariants = {
  valid: {
    boxShadow: "inset 0 0 0 1px #d1d5da",
    transition: {
      ease: "easeInOut",
      duration: 0.15,
    },
  },
  focused: {
    boxShadow: "inset 0 0 0 2px #002DE0",
    transition: {
      ease: "easeInOut",
      duration: 0.15,
    },
  },
  invalid: {
    boxShadow: "inset 0 0 0 2px #e22d2d",
    transition: {
      ease: "easeInOut",
      duration: 0.15,
    },
  },
};

const labelVariants = {
  initial: {
    top: "12px",
    fontSize: "16px",
    transition: {
      ease: "easeInOut",
      duration: 0.15,
    },
  },
  focused: {
    top: "2px",
    fontSize: "14px",
    transition: {
      ease: "easeInOut",
      duration: 0.15,
    },
  },
};

export function BaseInput({
  value,
  valid,
  onFocus,
  onBlur,
  onChange,
  className,
  staticLabel,
  placeholder,
  helperText,
  rightAccessoryView,
  leftAccessoryView,
  ...rest
}: BaseInputProps) {
  const [inputValue, setInputValue] = useState(value);
  const [focused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<any>(null);

  const handleOnFocus = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      //animateFocus();
      onFocus && onFocus(e);
    },
    [onFocus]
  );

  const handleOnBlur = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      if (!inputValue) {
        setIsFocused(false);
      }
      onBlur && onBlur(e);
    },
    [onBlur, inputValue]
  );

  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      onChange && onChange(e);
    },
    [onChange]
  );

  useEffect(() => {
    if (inputValue) {
      setIsFocused(true);
    }
  }, [inputValue]);

  return (
    <div className="relative flex items-start">
      <div className="relative flex items-center w-full mb-3 flex-col">
        <motion.input
          value={inputValue}
          ref={inputRef}
          variants={inputVariants}
          initial={false}
          animate={valid ? (focused ? "focused" : "valid") : "invalid"}
          placeholder={staticLabel ? "" : placeholder}
          className={mergeClasses(
            "appearance-none w-full border-0 caret-primary-blue inline-flex text-base outline-none p-3 rounded-lg h-12 text-default bg-transparent",
            focused && "pt-5 px-3 pb-0",
            className
          )}
          {...rest}
          // overwrite handlers
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          onFocus={handleOnFocus}
        />
        <motion.label
          onClick={() => inputRef.current.focus()}
          variants={labelVariants}
          animate={focused ? "focused" : "initial"}
          className="cursor-pointer left-3 text-palette-grey4 absolute"
        >
          {staticLabel}
        </motion.label>
        {!valid && helperText && (
          <Paragraph
            size="text-sm"
            color="danger"
            className="w-full mt-1.5 mb-1"
          >
            {helperText}
          </Paragraph>
        )}
      </div>
    </div>
  );
}
