import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { getImages } from '../store/actions/imageActions';
import ImageList from './ImageList';
import ImageForm from './ImageForm';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  const images = useSelector((state: RootState) => state.images.images);

  return (
    <div>
      <ImageForm />
      <ImageList images={images} />
    </div>
  );
};

export default App;
