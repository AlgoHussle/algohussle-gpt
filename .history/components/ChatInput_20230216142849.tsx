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
                   

                </button>
            </form>
        </div>
    )
};

export default ChatInput;
