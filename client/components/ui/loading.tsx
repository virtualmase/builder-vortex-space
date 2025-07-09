import { cn } from "@/lib/utils";

interface LoadingProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  text?: string;
}

export function Loading({
  className,
  size = "md",
  text = "Loading...",
}: LoadingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div
      className={cn("flex flex-col items-center justify-center p-8", className)}
    >
      <div className="relative">
        <div
          className={cn(
            "animate-spin rounded-full border-2 border-yellow-400/20 border-t-yellow-400",
            sizeClasses[size],
          )}
        />
        <div
          className={cn(
            "absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-orange-500/20 to-yellow-400/20",
            sizeClasses[size],
          )}
        />
      </div>
      {text && (
        <p className="mt-4 text-orange-300 text-sm font-mono animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
}

export function PageLoading() {
  return (
    <div className="min-h-screen bg-retro-gradient flex items-center justify-center">
      <div className="text-center">
        <Loading size="lg" text="Initializing Quantum Leap..." />
        <div className="mt-8 space-y-2">
          <div className="h-2 w-48 bg-yellow-400/20 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full animate-pulse" />
          </div>
          <p className="text-yellow-400 text-xs font-mono">
            Connecting to TAO Mesh Network
          </p>
        </div>
      </div>
    </div>
  );
}
