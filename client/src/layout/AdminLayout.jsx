import AdminNav from '@/components/AdminNav';
import { useAuth } from '@/hooks/useAuth'
import Sidebar from '@/components/Sidebar';
import { Outlet } from 'react-router';

export default function AdminLayout() {
    const { user } = useAuth();
      return (
    <>
    <section className="min-h-dvh">
        <Sidebar user={user}/>
        <div className="lg:ml-[200px]">
            <AdminNav/>
            <Outlet/>
        </div>
    </section>
    </>
  )
}
