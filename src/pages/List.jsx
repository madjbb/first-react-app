import React, {useContext, useEffect} from 'react';
import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import IconButton from '@mui/material/IconButton';
// import ListItemText from '@mui/material/ListItemText';
// import Avatar from '@mui/material/Avatar';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import DeleteIcon from '@mui/icons-material/Delete';
// import FolderIcon from '@mui/icons-material/Folder';
// import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';

import { CarsContext } from '../components/contexts/car.context';
import { UIContext } from '../components/contexts/UI.context';

import CarsList from '../components/CarsList';

function CarsListPage() {
  const {cars, fetchCars, deleteCar} = useContext(CarsContext);
  const {showMessage} = useContext(UIContext);

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  const deleteHandler = (id) => {
    deleteCar(id);
  };

  return (
    <>
      <Typography variant="h3" component="h2">
        Cars
      </Typography>
      <Button onClick={() => showMessage({
        type: 'warning',
        string: 'This is a warning',
      })} >Show Message</Button>
      <CarsList cars={cars} deleteHandler={deleteHandler} />
    </>
  );
}

export default CarsListPage;
