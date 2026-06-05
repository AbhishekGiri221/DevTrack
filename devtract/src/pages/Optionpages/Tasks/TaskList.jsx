import { Pencil } from 'lucide-react';
import './TaskList.css';
import { FiTrash2 } from 'react-icons/fi';

function TaskList({ task }) {

    return (
        <>

            {
                task.length > 0 ?
                        task.map((task) => {
                            return (

                                <div className="task-lists">
                                    <div className="task-left-section">
                                        <input type="checkbox" className='input-box' />
                                        <h3>{task.title}</h3>
                                    </div>

                                    <div className="task-right-section">
                                        <span>Inprogress</span>
                                        <Pencil size={20} />
                                        <FiTrash2 size={20} />
                                    </div>
                                </div>

                            )
                        })
                    
                    :
                    <h1 className='content-before-task'>Add your new task</h1>
            }
        </>
    )
}

export default TaskList;