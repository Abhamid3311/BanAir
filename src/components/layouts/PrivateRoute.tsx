// components/PrivateRoute.tsx
import React, { useEffect, ReactElement } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { useGetSingleUsersQuery } from '@/redux/features/users/userApi';
import { useRouter } from 'next/router';
import UserDashboardLayout from './user/UserDashboardLayout';
import AdminLayout from './Admin/AdminLayout';

interface RequireRoleProps {
    children: ReactElement;
    role: UserRole;
}

const RequireRole: React.FC<RequireRoleProps> = ({ children, role }) => {
    const { user } = useAppSelector(state => state.user);
    const { data, isLoading } = useGetSingleUsersQuery(user.email);

    const router = useRouter();
    const userRole = data.role;

    useEffect(() => {
        if (!userRole) {
            // Redirect to login or unauthorized page if the user is not authenticated
            router.push('/');
        }
    }, [userRole, router]);

    if (isLoading) {
        return <p>Loading...</p>;
    }


    // Render appropriate layout based on user role
    if (userRole === 'admin') {
        return <AdminLayout>{children}</AdminLayout>;
    } else {
        return <UserDashboardLayout>{children}</UserDashboardLayout>;
    }
};

export default RequireRole;
