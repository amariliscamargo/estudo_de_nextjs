import Link from 'next/link'

import { useRouter } from 'next/router'

const Todo = () => {

    const router = useRouter() 

    const todoId = router.query.todoId //pega o id da url o nome todoId que vem depois da query é o mesmo dado ao arquivo

    return(
        <>
            <h1>Exibindo o todo: {todoId}</h1>
            <Link href="/">
                <a>Voltar</a>
            </Link>
            <p>Comentário: la la la ...<Link href={`/todos/${todoId}/comments/1`}><a>Detalhes</a></Link></p>
            <p>Comentário: le le le ...<Link href={`/todos/${todoId}/comments/2`}><a>Detalhes</a></Link></p>
            <p>Comentário: li li li ...<Link href={`/todos/${todoId}/comments/3`}><a>Detalhes</a></Link></p>
        </>
    )
}

export default Todo