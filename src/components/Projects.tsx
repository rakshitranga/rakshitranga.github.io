import React from "react";

type ProjectsProps = {
  children: React.ReactNode;
};

export function Projects({ children }: ProjectsProps) {
  const total = React.Children.count(children);

  return (
    <div className="flex border-black border-4 p-10 rounded-xl">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          // Only add a right border if not the last child
          const borderClass = index !== total - 1 ? "border-r" : "";

          return (
            <div className={`p-2 ${borderClass}`}>
              {child}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

