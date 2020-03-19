import * as React from "react";
import styled from 'styled-components';
import InputEmail from './InputEmail';
import InputPassword from "./InputPassword";

// Amplify AWS Congnito
import Amplify, { Auth } from 'aws-amplify';
import { cognito } from '../../config'
Amplify.configure(cognito);

const Title = styled.h1`
  color: red;
`;
interface Props {}

interface State {
    email: string,
    password: string,
    message?: string
}

class Login extends React.Component<Props,State> {

    constructor(props:any){
        super(props)
        this.state = {
            email:'',
            password:'',
        }
    }

    componentDidMount() {
        // if user is logged in! go to the first page
        console.log("here");
        Auth.currentAuthenticatedUser()
            .then(()=>{

            }).catch(()=>{
            // do nothing
        })
    }

    private _handleSubmit = (event: any) => {
        if (event) event.preventDefault()

        const { email, password } = this.state
        Auth.signIn(email,password).then(()=>{
            this.setState({
                message: 'Successful'
            })
        }).catch((response:any)=>{
            if (response.message){
                this.setState({
                    message: response.message
                })
            }
        })
        ;
    }

    private _handleOnChangeForm = (value?:string, name?:string) => {


        if (name != null) {
            let state : { [key:string]: any; } = {};
            state[name] = value
            this.setState((current) => ({...current, [name]:value}))
        }
    }

    render () {
        const { message } = this.state
        return (
            <div>
                "hahah"
                <Title>
                    Login
                </Title>
                <form onSubmit={this._handleSubmit}>
                    <InputEmail
                        name={'email'}
                    onChange={(value?:string)=>{this._handleOnChangeForm(value,'email')}}
                    />
                    <InputPassword
                    name={'password'}
                    onChange={(value?:string)=>{this._handleOnChangeForm(value,'password')}}
                    />
                    <button type="submit" onClick={this._handleSubmit}>
                        Login
                    </button>

                    {message &&
                        <p style={{color:'red'}}>
                            {message}
                        </p>
                    }
            </form>
        </div>
    )
    }
}


export default Login