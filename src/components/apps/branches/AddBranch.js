import * as React from 'react';
import { useState } from 'react';
import { addNote } from 'src/store/apps/notes/NotesSlice';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import {
  Button,
  Dialog,
  Fab,
  DialogContent,
  TextField,
  DialogActions,
  DialogContentText,
  Typography,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { IconCheck } from '@tabler/icons';

const AddBranches = ({ colors }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [scolor, setScolor] = React.useState('primary');
  const id = useSelector((state) => state.notesReducer.notes.length + 1);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [workingTime, setWorkingTime] = React.useState('');
  const [manager, setManager] = useState('');
  const [telephone, setTelephone] = useState('');

  const setColor = (e) => {
    setScolor(e);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setManager(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote({
      id,
      title,
      description,
      workingTime,
      manager,
      telephone,
      color: scolor
    }));
    setOpen(false);
    setTitle('');
    setDescription('');
    setWorkingTime('');
    setManager('');
    setTelephone('');
  };

  return (
    <>
      <Button variant="contained" disableElevation color="primary" onClick={handleClickOpen}>
        Add Branch
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Typography variant="h5" mb={2} fontWeight={700}>
            Add New Branch
          </Typography>
          <DialogContentText>
            To add new branches please enter your description and choose note colors. and press the
            submit button to add new note.
          </DialogContentText>
          <TextField
            multiline
            rows={1}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            margin="normal"
            id="title"
            label="Add Branch Title"
            type="text"
            fullWidth
            size="small"
            variant="outlined"
          />
          <TextField
            multiline
            rows={1}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            margin="normal"
            id="description"
            label="Add Branch Description"
            type="text"
            fullWidth
            size="small"
            variant="outlined"
          />
          <TextField
            multiline
            rows={1}
            value={workingTime}
            onChange={(e) => setWorkingTime(e.target.value)}
            margin="normal"
            id="working-time"
            label="Add Working Time"
            type="text"
            fullWidth
            size="small"
            variant="outlined"
          />
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="demo-simple-select-label">Select branch manager</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={manager}
              label="Select branch manager"
              onChange={handleChange}
            >
              <MenuItem value={"Eshmat"}>Eshmat</MenuItem>
              <MenuItem value={"Toshmat"}>Toshmat</MenuItem>
              <MenuItem value={"Boltaboy"}>Boltaboy</MenuItem>
            </Select>
          </FormControl>
          <TextField
            multiline
            rows={1}
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            margin="normal"
            id="telephone"
            label="Add Telephone Number"
            type="text"
            fullWidth
            size="small"
            variant="outlined"
          />
          <Typography variant="h6" my={2}>
            Choose Color
          </Typography>
          {colors.map((color) => (
            <Fab
              color={color.disp}
              sx={{
                marginRight: '3px',
                transition: '0.1s ease-in',
                scale: scolor === color.disp ? '0.9' : '0.7',
              }}
              size="small"
              key={color.disp}
              onClick={() => setColor(color.disp)}
            >
              {scolor === color.disp ? <IconCheck /> : ''}
            </Fab>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            disabled={title === ''}
            onClick={handleSubmit}
            variant="contained"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddBranches;
