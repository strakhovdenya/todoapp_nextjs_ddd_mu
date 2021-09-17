import TaskListContextProvider from "../src/services/storeContext";
import Header from "../components/Header";
import EditForm from "../components/EditForm";

export default function Home() {
    return (
            <div className="container">
                <div className="app-wrapper">
                    <div className="main">
                        <Header headerTitle="Task Manager (edit)"/>
                        <EditForm/>
                    </div>
                </div>
            </div>
    )
}