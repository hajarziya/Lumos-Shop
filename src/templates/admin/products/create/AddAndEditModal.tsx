// import { AdminLayout } from '@src/components/admin'
import {
  Box,
  CardMedia,
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Button,
  Modal,
  Input
} from '@mui/material'
import useStyles from './AddAndEditModal.styles'
import { useState, ChangeEvent, useMemo } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ICreateProductApi } from '@src/api/interface'
import { useCategories, useCreateProduct, useSubCategories } from '@src/api'

interface AddAndEditModalProps {
  modalOpen: boolean
  onClose: () => void
  isEdit: boolean
  editId?: string
  onAddProduct: () => void
}

export function AddAndEditModal ({ modalOpen, onClose, isEdit, onAddProduct }: AddAndEditModalProps) {
  const { classes } = useStyles()
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const { register, handleSubmit } = useForm<ICreateProductApi['body']>()
  const { mutate: createProductMutation } = useCreateProduct({
    onSuccess: () => {
      onAddProduct()
    }
  })
  const { data: categoriesData } = useCategories({ page: 1 })
  const { data: subCategoriesData } = useSubCategories({ page: 1 })
  const categories = useMemo(() => categoriesData?.data.data.categories ?? [], [categoriesData])
  const subCategories = useMemo(() => subCategoriesData?.data.data.subcategories ?? [], [subCategoriesData])
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    subcategory: '',
    brand: '',
    quantity: '',
    price: '',
    description: ''
  })
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      setSelectedImage(files[0])
    }
  }
  const onSubmit: SubmitHandler<ICreateProductApi['body']> = (data) => {
    const newFormData = { ...formData, ...data }
    setFormData(newFormData)

    const formDataToSend = new FormData()
    formDataToSend.append('name', newFormData.name)
    formDataToSend.append('category', newFormData.category?.toString())
    formDataToSend.append('subcategory', newFormData.subcategory?.toString())
    formDataToSend.append('brand', newFormData.brand)
    formDataToSend.append('quantity', newFormData.quantity)
    formDataToSend.append('price', newFormData.price?.toString())
    formDataToSend.append('description', newFormData.description)
    formDataToSend.append('images', selectedImage as Blob)

    createProductMutation(formDataToSend)
  }
  return (
       <Modal open={modalOpen}
                   onClose={onClose}
                   aria-label="hello"
                   aria-describedby="hello hajar"
                   className={classes.modal}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box className={classes.container}>
                        <Box>

                            {selectedImage && (
                                <CardMedia
                                    component="img"
                                    alt="Selected Image"
                                    height="440"
                                    src={URL.createObjectURL(selectedImage)}
                                />
                            )}
                            <Input
                                type="file"
                                onChange={handleImageChange}
                                disableUnderline
                                className={classes.addImageInput}

                            />
                        </Box>
                        <Box>
                            <TextField className={classes.textFieldName}
                                       label={'Name'} {...register('name')} ></TextField>
                            <Box sx={{ display: 'flex', gap: '30px', margin: '20px 0' }}>
                                 <FormControl fullWidth>

                                    <InputLabel id="demo-simple-select-label">Category</InputLabel>

                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Category"
                                        {...register('category')}
                                        value={formData.category}
                                        onChange={(e) => { setFormData({ ...formData, category: e.target.value }) }}

                                    >
                                        {categories.map(category =>
                                        <MenuItem key={category._id} value={category._id}>{category.name}</MenuItem>)}

                                    </Select>
                                </FormControl>

                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Sub Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Sub Category"
                                        {...register('sub category')}
                                        value={formData.subcategory}
                                        onChange={(e) => { setFormData({ ...formData, subcategory: e.target.value }) }}

                                    >
                                        {subCategories.map(subcategories => <MenuItem key={subcategories._id} value={subcategories._id}>{subcategories.name}</MenuItem>)}

                                    </Select>
                                </FormControl>

                            </Box>
                            <Box sx={{ display: 'flex', gap: '30px', margin: '20px 0' }}>
                                <TextField {...register('price')} label={'Price'}></TextField>
                                <TextField {...register('quantity')} label={'Quantity'}></TextField>
                                <TextField {...register('brand')} label={'Brand'}></TextField>
                            </Box>

                            <TextField label={'Description'} fullWidth {...register('description')}></TextField>

                            <Button className={classes.btn} type="submit" onClick={onAddProduct}>Add product</Button>
                        </Box>
                    </Box>
                </form>
            </Modal>
  )
}
