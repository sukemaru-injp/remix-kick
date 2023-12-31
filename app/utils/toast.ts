import { toast, ToastContent } from 'react-toastify';

export const useToast = () => {
  function success<T = unknown>(content: ToastContent<T>) {
    toast.success(content);
  }

  function warning<T = unknown>(content: ToastContent<T>) {
    toast.warning(content);
  }

  function error<T = unknown>(content: ToastContent<T>) {
    toast.error(content);
  }

  return { success, warning, error };
};
