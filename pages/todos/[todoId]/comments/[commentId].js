import Link from 'next/link'

import { useRouter } from 'next/router'

const Comment = () => {
  const router = useRouter() 

  const todoId = router.query.todoId 
  const commentId = router.query.commentId //pega o id da url o nome todoId que vem depois da query é o mesmo dado ao arquivo
  
  return (
    <div>{commentId}</div>
  )
}

export default Comment