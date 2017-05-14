export interface UserState {
    isLoggedIn: boolean;

    name: string;
    role: userRole;

    idToken: string;

    isLoading: boolean;
    errors: string[];
}

export type userRole
    = 'student'
    | 'admin';
