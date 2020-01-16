import { useState } from "react";

const useForm = (initialValue) => {

    const [value, setValue] = useState(initialValue);

    const handleValue = (event) => {
        event.preventDefault();
    }

    return [value, setValue, handleValue];
}

export default useForm;