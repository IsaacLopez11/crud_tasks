import { Link } from "react-router-dom" 


export function Navigation()
{
    return(
        <div className="flex justify-between py-3">
            <Link  className="font-bold text-3xl mb-4" to='/tasks'><h1>Tasks App</h1></Link>
            <Link className="bg-indigo-500 px-3 py-3 rounded-lg" to='/create-tasks'>Create Task</Link>
        </div>

    )
}
