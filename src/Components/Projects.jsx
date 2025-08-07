import React from 'react'
import ProjectCards from './ProjectCards';
import todo from '../assets/todo.png'
import Task from '../assets/Task Manager.png'
import clickNbuy from '../assets/clickNbuy.png'
import web from '../assets/image (1).png'
import designer from '../assets/designer studio.png'
const Projects = () => {
  return (
    <div id="Projects" className='p-10 max-w-screen-2xl mx-auto md:p-10 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
       
        <div className="sm:py-12 sm:px-12 lg:px-24 p-2 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2  gap-x-10">
        <ProjectCards title="E-commerce web" code="https://github.com/Bhanugupta-code/QTNReactAssignment" img={web} main="This app is made in react with Tailwind." demo="https://qtn-react-assignment.vercel.app/" />
        <ProjectCards title="Todo App" code="https://github.com/Bhanugupta-code/Todo-app" img={todo} main="This app is made in react with local storage." demo="https://todo-six-gules.vercel.app/" />
        <ProjectCards title="Designer Studio" img={designer} demo="https://designer-studio-five.vercel.app/" code="https://github.com/Bhanugupta-code/Designer-Studio"  main="This is the cloned of the mulberry art website. This website is made in react ."/>
        <ProjectCards title="Click N Buy" code="https://github.com/Bhanugupta-code/clickNbuy" img={clickNbuy} main="This app is made in react with bootstrap." demo="https://clicknbuy-beryl.vercel.app/" />
        <ProjectCards title="Task Manager" img={Task} demo="https://task-manager-liart-beta.vercel.app/" code="https://github.com/Bhanugupta-code/Task-Manager"  main="This is the Enhanced version of Todo app with additional functionality moving task and give priority to task."/>
        </div>
      
    </div>
  )
}

export default Projects;
