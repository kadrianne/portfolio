import { useState } from 'react'

const useFormField = () => {

	const [field, setField] = useState('')

	const handleChange = (event) => {
		setField(event.target.value)
	}

	return [field, handleChange, setField]
}

export default useFormField