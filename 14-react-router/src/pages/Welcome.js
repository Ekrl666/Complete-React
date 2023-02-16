import { Route } from "react-router-dom";

const Welcome = () => {
    return (
        <div>
           <h1>This is Welcome Page</h1> 
           <Route path='/welcome/new-user'>
                <p>Welcome new user</p>
           </Route>
        </div>
    )
}

export default Welcome;