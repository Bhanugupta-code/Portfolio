import React from 'react'
import ProjectCards from './ProjectCards';
import todo from '../assets/todo.png'
import Task from '../assets/Task Manager.png'
import clickNbuy from '../assets/clickNbuy.png'
const Projects = () => {
  return (
    <div id="Projects" className='p-10 md:p-10 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
       
        <div className="py-12 px-8 flex flex-wrap gap-4">
        <ProjectCards title="Todo App" code="https://github.com/Bhanugupta-code/Todo-app" img={todo} main="This app is made in react with local storage." demo="https://todo-six-gules.vercel.app/" />
        <ProjectCards title="Click N Buy" code="https://github.com/Bhanugupta-code/clickNbuy" img={clickNbuy} main="This app is made in react with bootstrap." demo="https://click-nbuy.vercel.app/" />
        <ProjectCards title="Task Manager" img={Task} demo="https://task-manager-liart-beta.vercel.app/" code="https://github.com/Bhanugupta-code/Task-Manager"  main="This is the Enhanced version of Todo app with additional functionality moving task and give priority to task."/>
        </div>
      
    </div>
  )
}

export default Projects;
