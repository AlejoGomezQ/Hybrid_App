import avatarImage from '../../assets/Mac_Pato.png';

const Avatar = () => {
    return (
        <figure className="flex justify-center relative items-center">
            <img
                src={avatarImage}
                className="h-40 w-40 rounded-full border-3 border-gray-200 hover:border-blue-500 transition-all duration-300 justify-center"
                alt="avatar"
            />
        </figure>
    )
}
export default Avatar
