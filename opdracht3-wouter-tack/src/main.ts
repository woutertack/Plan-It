import './css/style.css'
import { LoginComponent, RegisterComponent } from './Components'
import App from "./App"


const initApp= () =>{
    const appContainer = document.getElementById('app')

    const app = new App(appContainer)
    app.addComponent(new LoginComponent())
    app.addComponent(new RegisterComponent())
    
    

   
}



window.addEventListener('load', initApp)

