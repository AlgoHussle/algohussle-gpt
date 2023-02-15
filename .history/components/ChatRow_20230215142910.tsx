import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';
i

type Props = {
    id: string;
};

function ChatRow({id}: Props) {
    return (
        <Link 
            href={`/chat/${id}`}
        >

            <ChatBubbleLeftIcon className='h-5 w-5' />
            <p>New Chat</p>
            <TrashIcon 
              className="h-5 w-5 text-gray-700 hover:text-red-700"
            />

        </Link>
    )
}

export default ChatRow
