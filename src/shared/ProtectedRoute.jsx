import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const IsToken = localStorage.getItem("token")
  if (!IsToken) {
    return <Navigate to='/login' />;
  }
  return <Outlet />;
}

export default ProtectedRoute;