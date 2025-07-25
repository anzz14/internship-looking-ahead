import { Button } from '@/components/ui/button';

export default function AdminLoginButton({ isLoading, onClick }) {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className="w-full h-10 bg-blue-600 hover:bg-blue-700 text-white font-medium mt-6"
      onClick={onClick}
    >
      {isLoading ? (
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <span>Signing in...</span>
        </div>
      ) : (
        'Sign In'
      )}
    </Button>
  );
}
