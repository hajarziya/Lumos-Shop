// import { AdminLayout } from '@src/components/admin'
import {
  Box,
  CardMedia,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Button,
  Modal
} from '@mui/material'
import useStyles from '@src/templates/admin/products/create/AddAndEditModal.styles'
import { useState } from 'react'

interface AddAndEditModalProps {
  modalOpen: boolean
  onClose: () => void
  isEdit: boolean
}

export function AddAndEditModal ({ modalOpen, onClose, isEdit }: AddAndEditModalProps) {
  const { classes } = useStyles()
  const [open, setOpen] = useState(false)
  const handleOpen = () => { setOpen(true) }
  const handleClose = () => { setOpen(false) }
  return (
      <>
       <Button onClick={handleOpen}>Open modal</Button>
        <Modal open={open}
               onClose={handleClose}
               aria-label="hello"
               aria-describedby="hello hajar"
               >
                      <Box className={classes.container}>
                           <Box>
                                <Typography variant={'h5'}>images</Typography>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="440"
                                    image="/images/tree.webp"
                                />
                            </Box>
                            <Box>
                                <TextField label={'Name'}></TextField>
                                <Box sx={{ display: 'flex', gap: '10px', margin: '20px 0' }}>
                                <TextField label={'Description'}></TextField>
                                <TextField label={'Price'}></TextField>
                                </Box>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Category"

                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                <Typography sx={{ marginTop: '20px' }}>Active</Typography>
                                <Box>
                                    <FormControlLabel required control={<Checkbox />} label="Enable" />
                                    <FormControlLabel required control={<Checkbox />} label="Disable" />
                                </Box>
                                <Button className={classes.btn}>Add product</Button>
                            </Box>
                        </Box>
        </Modal>
      </>
  )
}
