import React from 'react';
import Input from '@/components/Input';
import Button from '@/components/Button';


const LoginPage = () => {
    return (
        <div className="p-4 max-w-md mx-auto">
            <Input type="text" placeholder="NickName" />
            <Button type="submit">Ingresar</Button>
        </div>
    );
}

export default LoginPage;

