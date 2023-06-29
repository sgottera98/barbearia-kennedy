import { FaStar, FaUserCircle } from 'react-icons/fa';

const Comment = ({ children }) => {
    return (
        <>
            <p className="flex items-center h-full">"{children}"</p>
            <div className="flex justify-start items-center h-auto gap-6 w-full">
                <FaUserCircle className="text-4xl xl:text-5xl" />
                <span className="flex gap-3 xl:gap-4 items-center">
                    <FaStar className="text-yellow" />
                    <FaStar className="text-yellow" />
                    <FaStar className="text-yellow" />
                    <FaStar className="text-yellow" />
                    <FaStar className="text-yellow" />
                </span>
            </div>
        </>
    );
};

export default Comment;
