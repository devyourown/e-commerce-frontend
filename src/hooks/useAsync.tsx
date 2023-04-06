import React, {useState} from 'react';
import {AxiosResponse} from "axios";


type asyncFunctionType = (...argv : any[]) => Promise<AxiosResponse>;
type useAsyncType = [isPending : boolean, error : Error | undefined, wrappedFunction : any];

function useAsync(asyncFunction : asyncFunctionType) : useAsyncType{
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState<Error>();

    const wrappedFunction = async (...argv : any[]) : Promise<AxiosResponse<any, any> | undefined> => {
        try {
            setIsPending(true);
            return await asyncFunction(...argv);
        } catch (err : any) {
            setError(err);
            return ;
        } finally {
			
            setIsPending(false);
        }
    }
    return [isPending, error, wrappedFunction];
}

export default useAsync;