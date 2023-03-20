import { useQuery } from 'react-query';
import { getAllPosts } from '../../services';
import { PostElement } from './PostElement';
import './PostsListPage.scss';
import { Loader } from '../../components';

export const PostsListPage = () => {
  const { data, isLoading } = useQuery(['posts'], () => getAllPosts());

  if (isLoading) return <Loader />;

  return (
    <div className="container">
      {data?.data?.map((post) => (
        <PostElement key={post.id} post={post} />
      ))}
    </div>
  );
};
