import { Message } from "./Message";

export class Chat {
    id?: number;
    name?: string;
    img?: string;
    members?: Array<string>;
    messages?: Array<Message>;
    selectedChat: boolean;
}