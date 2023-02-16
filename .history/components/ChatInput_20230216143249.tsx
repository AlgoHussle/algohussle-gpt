import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

type Props = {
    chatId: string;
}

function ChatInput({ chatId }: Props) {
    return (
        <div>
            <form className="p-5 space-x-5 flex-1" action="">
                <input type="text" 
                placeholder="Type you message here..."/>
                <button>
                    <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
                </button>
            </form>

            div
        </div>
    )
};

export default ChatInput;
