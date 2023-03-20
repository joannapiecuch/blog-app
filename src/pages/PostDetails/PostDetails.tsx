import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import { getPostDetails } from '../../services';
import { Loader } from '../../components';

export const PostDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, data } = useQuery(['post', id], () => getPostDetails(id));

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container">
      <div className="flex flex--column">
        <span>{data?.data?.title}</span>
        <span>{data?.data?.description}</span>
        <span>{data?.data?.createdAt}</span>
      </div>
    </div>
  );
};
