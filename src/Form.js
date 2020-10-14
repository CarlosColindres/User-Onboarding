import React from 'react'

const Form = ({values, change, submit, disabled,errors}) => {
    const onSubmit = (evt) => {
        evt.preventDefault()
        submit()
    }

    const onChange = (e) => {
        const { name, value, type, checked } = e.target
        const values = type === "checkbox" ? checked : value
        change(name, values)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
                <label>
                    Name
                    <input
                        value={values.name}
                        onChange={onChange}
                        name="name"
                        type="text"
                    />
                </label>
                <label>
                    Email
                    <input
                        value={values.email}
                        onChange={onChange}
                        name="email"
                        type="text"
                    />
                </label>
                <label>
                    Password
                    <input
                        value={values.password}
                        onChange={onChange}
                        name="password"
                        type="password"
                    />
                </label>
                <label>
                    Terms of service
                    <input
                        type="checkbox"
                        name="terms"
                        checked={values.terms}
                        onChange={onChange}
                    />
                </label>
                <button disabled={disabled}>submit</button>
            </form>
        </div>
    )
}

export default Form
