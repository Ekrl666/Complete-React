import { Suspense } from 'react';
import { useLoaderData, defer, Await} from 'react-router-dom';

import Posts from '../components/Posts';
import { getSlowPosts } from '../util/api';

function DeferredBlogPostsPage() {
  const loaderData = useLoaderData()

  return (
    <>
      <h1>Our Blog Posts</h1>
      <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={loaderData.post} errorElement={<p>Error while Loading</p>}>
        {(loadedPost)=> <Posts blogPosts={loadedPost} />}
      </Await>
      </Suspense>
    </>
  );
}

export default DeferredBlogPostsPage;

export async function loader () {
  return defer ({post: getSlowPosts()})
}