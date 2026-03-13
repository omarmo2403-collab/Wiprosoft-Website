import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-bold text-accent">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-secondary">Page Not Found</h2>
      <p className="mt-2 text-text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8">
        <Button href="/">Back to Home</Button>
      </div>
    </div>
  );
}
