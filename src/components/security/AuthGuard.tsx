'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

export type UserRole = 'admin' | 'ops_lead' | 'support_specialist';

interface AuthContextType {
    isAuthenticated: boolean;
    userRole: UserRole;
    tenantName: string;
    login: (role: UserRole) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
    isAuthenticated: true,
    userRole: 'ops_lead',
    tenantName: 'StuckAlert Demo Store',
    login: () => { },
    logout: () => { },
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [userRole, setUserRole] = useState<UserRole>('ops_lead');
    const tenantName = 'StuckAlert Merchant Ops';

    const login = (role: UserRole) => {
        setUserRole(role);
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, userRole, tenantName, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const AuthGuard: React.FC<{ children: React.ReactNode; requiredRole?: UserRole }> = ({
    children,
    requiredRole,
}) => {
    const { isAuthenticated, userRole } = useAuth();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    if (!isAuthenticated) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                    <Lock size={28} />
                </div>
                <h2 className="text-xl font-bold text-white">Authentication Required</h2>
                <p className="text-sm text-gray-400 max-w-md">
                    Please log in with appropriate tenant credentials to access StuckAlert operational controls.
                </p>
            </div>
        );
    }

    if (requiredRole && requiredRole === 'admin' && userRole !== 'admin') {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <ShieldCheck size={28} />
                </div>
                <h2 className="text-xl font-bold text-white">Access Restricted</h2>
                <p className="text-sm text-gray-400 max-w-md">
                    This operation requires <span className="font-semibold text-amber-400">Administrator</span> permissions.
                </p>
            </div>
        );
    }

    return <>{children}</>;
};
