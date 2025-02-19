import React from 'react';
import Input from '@/components/shared/Input';
import Button from '@/components/shared/Button';
import Avatar from '@/components/shared/Avatar';


const LoginPage = () => {
    return (
        <div className="max-w-md mx-auto px-4 py-30 flex flex-col items-center space-y-45 ">
            <Avatar/>
            <Input type="text" placeholder="NickName" />
            <Button type="submit">Ingresar</Button>
        </div>
    );
}

export default LoginPage;

