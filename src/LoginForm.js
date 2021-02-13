import './styles.css';

export const LoginForm = ({
    handleSubmit,
    setEmail,
    email,
    setPassword,
    password,
}) => {
    return ( <form onSubmit = { handleSubmit } >
        <input className = "TextFields"
        onChange = {
            (e) => setEmail(e.target.value) }
        value = { email }
        placeholder = "email" />
        <br/> { ' ' } <input className = "TextFields"
        type = "password"
        onChange = {
            (e) => setPassword(e.target.value) }
        value = { password }
        placeholder = "password" />
        <br/>
        <button className = "LoginButton"
        type = "submit" > { ' ' }
        Login { ' ' } </button>{' '} </form>
    );
};