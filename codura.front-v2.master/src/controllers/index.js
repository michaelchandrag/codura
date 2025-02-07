import { fetchData, sendMessageToOpenAI } from '@/configs/api'
import { sleep, showAlert } from '@/helpers';

export const postMessage = async (message) => {
    const result = await sendMessageToOpenAI(message);
    if(result){
        if(!result.success){
            showAlert({ type: 'warning', text: result.msg });
        }
        return result;
    }
}
