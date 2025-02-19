import React, { useState } from 'react';
import Input from '@/components/shared/Input';
import Button from '@/components/shared/Button';
import Avatar from '@/components/shared/Avatar';

const LoginPage = () => {
    const [nickname, setNickname] = useState('');

    return (
        <div className="py-7 px-7 h-screen">
            <div className="bg-gray-400 h-full rounded-md max-w-md mx-auto px-4 py-10 flex flex-col items-center justify-around space-y-4">
                <div className="text-center space-y-4">
                <Avatar />
                {nickname && <p className="text-white text-3xl font-semibold">{nickname}</p>}
                </div>
                <div className="flex flex-col space-y-5">
                <Input 
                    type="text" 
                    placeholder="NickName" 
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                />
                <Button type="submit">Ingresar</Button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
