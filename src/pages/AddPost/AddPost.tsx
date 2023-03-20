import { useMutation, useQueryClient } from 'react-query';
import { PostQuery } from '../../types';
import { useForm } from 'react-hook-form';
import { Button } from '../../components';
import { addPost } from '../../services';

const defaultValues = {
  title: '',
  description: ''
};
export const AddPost = () => {
  const queryClient = useQueryClient();

  // can be method to remove post here also

  const addNewPost = useMutation((newPost: PostQuery) => addPost(newPost), {
    onSuccess: (data) => {
      queryClient.setQueryData(['posts'], data.data);
      alert('Post had been addeds');
    }
  });

  const { register, handleSubmit, reset } = useForm<PostQuery>({
    defaultValues
  });

  const onSubmit = (data: PostQuery) => {
    addNewPost.mutate(data);
    reset(defaultValues);
  };

  return (
    <div className="container">
      <form className="flex flex--column" onSubmit={handleSubmit(onSubmit)}>
        <label>Title</label>
        <input {...register('title')} />
        <label>Description</label>
        <input {...register('description')} />
        <Button btnText="Add new post" type="submit" />
      </form>
    </div>
  );
};
