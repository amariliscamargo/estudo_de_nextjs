import Link from 'next/link'
import styles from '../../styles/Todos.module.css'
const Todos = ({todos}) => {
  return (
    <>
        <h1>Tarefas para fazer!</h1>
        <ul className={styles.todolist}>
           {todos.map((todo)=>(
               <li key={todo.id}>{todo.title} - <Link href={`/todos/${todo.id}`}><a>Ver mais</a></Link></li>
           ))}
        </ul>
    </>
  )
}

export default Todos

//Função do Next
export async function getStaticProps() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')

    const todos = await data.json();

    //console.log(todos);
    return{
        props: {todos},
    }
}