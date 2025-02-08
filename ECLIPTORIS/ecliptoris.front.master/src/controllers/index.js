import { fetchData, sendMessageToOpenAI } from '@/configs/api'
import { sleep, showAlert } from '@/helpers';

export const getInfo = async () => {
    const result = await fetchData('getMain', '', null, null, true);
    if(result){
        return result;
    }
}

export const postMessage = async (message) => {
    const result = await sendMessageToOpenAI(message);
    if(result){
        if(!result.success){
            showAlert({ type: 'warning', text: result.msg });
        }
        return result;
    }
}
