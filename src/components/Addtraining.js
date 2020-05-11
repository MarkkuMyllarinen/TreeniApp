import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function Addtraining(props) {
    const [open, setOpen] = React.useState(false);
    const [training, setTraining] = React.useState({
        date: '', time: '', activity: '', duration: '', customer: ''
    });
    let datetime = '';


    const handleClickOpen = () => {
        setTraining({...training, duration: '', customer: props.customer.links[0].href})
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOnChange = (event) => {

        setTraining({...training, [event.target.name]: event.target.value});
    };


    const saveTraining = () => {
        props.addNewTraining(training);
        handleClose();
    };

    return (
        <div>
            <Button color="primary" onClick={handleClickOpen}>
                Add training
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Uusi treeni asiakkaalle</DialogTitle>
                <DialogContent>

                    <TextField
                        autoFocus
                        name="date"
                        margin="normal"
                        type="datetime-local" // EI TOIMI FIREFOXISSA.....
                        onChange={e => handleOnChange(e)}
                        value={training.date}
                        fullWidth
                    /><TextField
                    margin="dense"
                    value={training.activity}
                    name="activity"
                    onChange={e => handleOnChange(e)}
                    label="Activity"
                    fullWidth
                /> <TextField
                    margin="dense"
                    name="duration"
                    value={training.duration}
                    onChange={e => handleOnChange(e)}
                    label="Duration"
                    fullWidth
                />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={saveTraining} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}