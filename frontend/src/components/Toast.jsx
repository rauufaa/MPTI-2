import { useEffect, useState } from "react";


function Toast({duration, message, type}) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    if(!visible) return null;
    return (
        <div className="toast toast-center">
            
            <div className={`alert alert-${type} shadow`}>
                {type=="info"&&(
                    <span className="loading loading-spinner"></span>
                )}
                <span>{message}</span>
            </div>
        </div>
    )
}

export default Toast