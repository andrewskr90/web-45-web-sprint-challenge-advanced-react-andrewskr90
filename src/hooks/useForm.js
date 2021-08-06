import { useState } from 'react'
// write your custom hook here to control your checkout form

const useForm = (initValues, messageInitValue) => {
    const [values, setValues] = useState(initValues)
    const [showSuccessMessage, setShowSuccessMessage] = useState(messageInitValue);

    const handleChanges = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setShowSuccessMessage(true);
    };
    
    return ([values, handleSubmit, handleChanges, showSuccessMessage])
}

export default useForm