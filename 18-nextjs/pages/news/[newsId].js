import {useRouter} from 'next/router'

function DetailPage() {
    const router = useRouter()
    const currentPage = router.query.newsId
    return <h1>This is {currentPage} Page</h1>
}

export default DetailPage;