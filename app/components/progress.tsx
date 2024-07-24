import { ProgressBar, ProgressBarProps } from "react-aria-components";
import { cn } from "~/utils/misc";

export interface ProgressProps extends ProgressBarProps {
  barClassName?: string;
  fillClassName?: string;
}

const Progress = ({
  className,
  barClassName,
  fillClassName,
  children,
  ...props
}: ProgressProps) => (
  <ProgressBar
    className={(values) =>
      cn(typeof className === "function" ? className(values) : className)
    }
    {...props}
  >
    {(values) => (
      <>
        {typeof children === "function" ? children(values) : children}
        <div
          className={cn(
            "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
            barClassName
          )}
        >
          <div
            className={cn(
              "h-full w-full flex-1 bg-primary transition-all",
              fillClassName
            )}
            style={{
              transform: `translateX(-${100 - (values.percentage || 0)}%)`,
            }}
          />
        </div>
      </>
    )}
  </ProgressBar>
);

export { Progress };
