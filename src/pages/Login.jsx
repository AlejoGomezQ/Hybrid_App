import { useState, useEffect } from "react"
import Input from "@/components/shared/Input"
import Button from "@/components/shared/Button"
import Avatar from "@/components/shared/Avatar"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
    const [nickname, setNickname] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const storedNickname = window.localStorage.getItem("nickname")
        if (storedNickname) {
            setNickname(storedNickname)
        }
    }, [])

    const validacion = (e) => {
        e.preventDefault()
        if (!nickname.trim()) {
            alert("El campo NickName no puede estar vacío")
            return
        }
        localStorage.setItem("nickname", nickname)
        navigate("/game-modes")
    }

    const handleChange = (e) => {
        setNickname(e.target.value)
    }

    return (
        <section className="py-7 px-7 h-screen bg-gradient-to-br from-purple-600 to-blue-500 font-sans">
            <div className="bg-white/20 h-full rounded-lg max-w-md mx-auto px-6 py-10 flex flex-col items-center justify-around space-y-6 shadow-lg">
                <div className="text-center space-y-4">
                    <Avatar />
                    {nickname && <p className="text-white text-3xl font-semibold">{nickname}</p>}
                </div>
                <form onSubmit={validacion} className="flex flex-col gap-y-4 w-full">
                    <Input
                        type="text"
                        placeholder="NickName"
                        value={nickname}
                        onChange={handleChange}
                        minLength={3}
                        maxLength={13}
                        className="bg-white/30 text-white placeholder-white/70 border-2 border-white/50 rounded-lg px-4 py-2 focus:outline-none focus:border-white/100 transition-all duration-300"
                    />
                    <Button
                        type="submit"
                        className="bg-purple-700 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                    >
                        Ingresar
                    </Button>
                </form>
            </div>
        </section>
    )
}

export default LoginPage

