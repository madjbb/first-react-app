import React, {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';

import { CarsContext } from '../components/contexts/car.context';

function CarsList() {
  const {cars, fetchCars} = useContext(CarsContext);

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  return (
    <>
      <Typography variant="h3" component="h2">
        Cars
      </Typography>
      <List>
        {cars.map(({ name, bhp, avatar_url, _id }, i) => (
          <ListItem key={i}>
            <ListItemAvatar>
              <Avatar alt="" src={avatar_url} />
            </ListItemAvatar>
            <ListItemText>
              {name} (BHP: {bhp})
            </ListItemText>
            <IconButton
              aria-label="update"
              to={`/update/${_id}`}
              component={Link}
            >
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={() => deleteCar(_id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default CarsList;
