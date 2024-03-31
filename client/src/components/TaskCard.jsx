import { useNavigate } from "react-router-dom";

export function TaskCard({task}){

    const navigate = useNavigate();
    return(
        <div className="bg-zinc-800 p-3 hover:bg-zinc-700"
        onClick={() =>{
            navigate(`/tasks/${task.id}`)
        }}
        >
        <h3 className="font-bold uppercase">{task.title}</h3>
        <p className="text-slate-400">{task.description}</p>
    </div>
    )
}