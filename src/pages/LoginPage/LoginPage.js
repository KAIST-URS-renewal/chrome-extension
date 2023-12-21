import React from 'react';
import { LoginForm } from 'src/components/LoginForm';
import { Welcome } from 'src/components/Welcome';

export const LoginPage = () => {
    return (
        <div>
            <Welcome />
            <LoginForm />
        </div>
    );
};
