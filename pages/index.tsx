import Header from "../components/Header";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";


export default function Home() {
    return (

            <div className="container">
                <div className="app-wrapper">
                    <div className="main">
                        <Header/>
                        <TaskForm/>
                        <TaskList/>
                    </div>
                </div>
            </div>
    )
}
