import { fetchData, sendMessageToOpenAI } from '@/configs/api'

export const postMessage = async (message) => {
    const result = await sendMessageToOpenAI(message);
    if(result){
        return result;
    }
}