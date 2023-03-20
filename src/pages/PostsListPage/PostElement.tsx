import { PostInterface } from '../../types';
import { Button } from '../../components';
import { useMutation } from 'react-query';
import { deletePost } from '../../services';
import { Link } from 'react-router-dom';
import './PostsListPage.scss';

interface Props {
  post: PostInterface;
}
export const PostElement = ({ post }: Props) => {
  // should add action on onSuccess delete post -> e.g remove from list this post, because there is still on lists in view
  const deletePostMutation = useMutation((id: string) => deletePost(id), {
    onSuccess: () => alert('Post had been deleted')
  });

  const onDeletePost = () => {
    deletePostMutation.mutate(post.id);
  };

  return (
    <div className="flex flex--column post-element">
      <Link to={`/posts/${post.id}`} className="flex flex--column" key={post.id}>
        <span>{post.title}</span>
        <span>{post.description}</span>
        <span>{post.createdAt}</span>
      </Link>
      <Button btnText="Usuń post" onClick={onDeletePost} />
    </div>
  );
};
