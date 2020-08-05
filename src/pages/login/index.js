import React, {Component} from 'react'
import Title from '../../components/title'
import SubmitButton from '../../components/button/submit-button'
import styles from './index.module.css'
import PageLayout from '../../components/page-layout'
import Input from '../../components/input'


class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state={
            username: "",
            password: ""
        }
    }

    handleChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value
        this.setState(newState)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {
            username,
            password
        } = this.state

    fetch('http://localhost:9999/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
            username,
            password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(promise => {
        console.log(promise)
        return promise.json()
    }).then(data => {
        console.log(data)
    })
    }

    render () {
        const {
            username,
            password
        } = this.state
    return (
        <PageLayout>
        <form className = {styles.container} onSubmit = {this.handleSubmit}>
            <Title title = "Login Page" />
            <Input
            value={username}
            onChange = {(e) => this.handleChange(e, 'username')}
            label="Username"
            id="username"
            />
            <Input
            type="password"
            value={password}
            onChange = {(e) => this.handleChange(e, 'password')}
            label="Password"
            id="password"
            />
                        
        </form>
        <div>
        <SubmitButton title = "Login" />
        </div>
        </PageLayout>
    )

}
}

export default LoginPage