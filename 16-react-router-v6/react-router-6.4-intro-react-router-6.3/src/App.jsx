import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import BlogLayout from './pages/BlogLayout';
import DeferredBlogPostsPage, {loader as blogPostsLoader} from './pages/DeferredBlogPost';
import ErrorPage from './pages/ErrorPage';
import NewPostPage, {action as postAction} from './pages/NewPost';
import PostDetailPage, {loader as blogPostLoader} from './pages/PostDetail';
import RootLayout from './pages/RootLayout';
import WelcomePage from './pages/Welcome';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout/>} errorElement={<ErrorPage />}>
  <Route index element={<WelcomePage />} />
  <Route path="/blog" element={<BlogLayout />}>
    <Route index element={<DeferredBlogPostsPage />} loader={blogPostsLoader}/>
    <Route path=":id" element={<PostDetailPage />} loader={blogPostLoader} />
  </Route>
  <Route path="/blog/new" element={<NewPostPage />} action={postAction} />
</Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
