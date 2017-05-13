export interface UserState {
    isLoggedIn: boolean;

    idToken: string;

    isLoading: boolean;
    errors: string[];
}
