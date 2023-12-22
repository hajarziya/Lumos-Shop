import {
  Box,
  CardMedia,
  TextField,
  MenuItem,
  Button,
  Modal,
  Input, Typography
} from '@mui/material'
import useStyles from './AddAndEditModal.styles'
import { useState, ChangeEvent, useMemo, useEffect } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { ICreateProductApi } from '@src/api/interface'
import 'react-quill/dist/quill.snow.css'
import dynamic from 'next/dynamic'

import { useCategories, useCreateProduct, useEditProduct, useProductDetails, useSubCategories } from '@src/api'

const DynamicQuill = dynamic(() => import('react-quill'), { ssr: false })

interface AddAndEditModalProps {
  modalOpen: boolean
  onClose: () => void
  editId?: string
  onAddProduct: () => void
}

export function AddAndEditModal ({ modalOpen, onClose, editId, onAddProduct }: AddAndEditModalProps) {
  const { classes } = useStyles()
  const [selectedImage, setSelectedImage] = useState<string | File | null>(null)
  const { register, handleSubmit, setValue, reset, control, watch } = useForm<ICreateProductApi['body']>()

  const { mutate: createProductMutation } = useCreateProduct({
    onSuccess: () => {
      onAddProduct()
    }
  })

  const { mutate: editProductMutation } = useEditProduct({ id: editId ?? '' }, {
    onSuccess: () => {
      onAddProduct()
    }
  })

  const { data: categoriesData } = useCategories({ page: 1 })
  const selectedCategory = watch('category')
  console.log({ selectedCategory })
  const { data: subCategoriesData } = useSubCategories({ page: 1, category: selectedCategory })

  const { data: productDetails, refetch } = useProductDetails({ id: editId ?? '' }, { enabled: !!editId })

  const categories = useMemo(() => categoriesData?.data.data.categories ?? [], [categoriesData])
  const subCategories = useMemo(() => subCategoriesData?.data.data.subcategories ?? [], [subCategoriesData])

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      setSelectedImage(files[0])
    }
  }
  const onSubmit: SubmitHandler<ICreateProductApi['body']> = (data) => {
    const formDataToSend = new FormData()
    console.log({ data })
    formDataToSend.append('name', data.name)
    formDataToSend.append('category', data.category?.toString())
    formDataToSend.append('subcategory', data.subcategory?.toString())
    formDataToSend.append('brand', data.brand)
    formDataToSend.append('quantity', data.quantity)
    formDataToSend.append('price', data.price?.toString())
    formDataToSend.append('description', data.description)
    if (typeof selectedImage !== 'string') {
      formDataToSend.append('images', selectedImage as Blob)
    }

    if (editId) {
      editProductMutation(formDataToSend)
    } else {
      createProductMutation(formDataToSend)
    }
  }

  useEffect(() => {
    if (productDetails && categories && subCategories) {
      setValue('name', productDetails.data.data.product.name)
      setValue('category', productDetails.data.data.product.category._id)
      setValue('subcategory', productDetails.data.data.product.subcategory._id)
      setValue('brand', productDetails.data.data.product.brand)
      setValue('quantity', productDetails.data.data.product.quantity)
      setValue('price', productDetails.data.data.product.price)
      setValue('description', productDetails.data.data.product.description)
      setSelectedImage(productDetails.data.data.product.images[0])
    }
  }, [productDetails, categories, subCategories])

  useEffect(() => {
    if (!modalOpen) {
      reset()
      setSelectedImage(null)
    } else {
      if (editId) {
        refetch()
      }
    }
  }, [modalOpen, editId])

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
                                src={typeof selectedImage === 'string' ? process.env.NEXT_PUBLIC_BASE_IMAGE_URL + selectedImage : URL.createObjectURL(selectedImage)}
                            />
                        )}

                        <label>
                            <Box className={classes.fileBtn}><Typography>Choose Image</Typography></Box>
                            <Input
                                type="file"
                                onChange={handleImageChange}
                                disableUnderline
                                sx={{ visibility: 'hidden' }}
                                className={classes.addImageInput}
                            />
                        </label>
                    </Box>
                    <Box>
                        <TextField className={classes.textFieldName}
                                   label={'Name'}
                                   InputLabelProps={{ shrink: !!editId || undefined }}
                                   {...register('name')} />
                        <Box sx={{ display: 'flex', gap: '30px', margin: '20px 0' }}>
                            <Controller
                                name="category"
                                control={control}
                                defaultValue={productDetails?.data?.data?.product.category._id ?? ''}
                                render={({ field }) => (
                                    <TextField
                                        select
                                        label="Category"
                                        {...field}
                                        sx={{ flex: 1 }}
                                    >
                                        {categories.map((category) => (
                                            <MenuItem key={category._id} value={category._id}>
                                                {category.name}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                )}
                            />
                            <Controller
                                name="subcategory"
                                control={control}
                                defaultValue={productDetails?.data?.data?.product.subcategory._id ?? ''}
                                render={({ field }) => (
                                    <TextField
                                        select
                                        label="Sub Category"
                                        {...field}
                                        sx={{ flex: 1 }}
                                    >
                                        {subCategories.map(subcategories =>
                                            <MenuItem key={subcategories._id}
                                                      value={subcategories._id}>
                                                {subcategories.name}
                                            </MenuItem>)}
                                    </TextField>)}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', gap: '30px', margin: '20px 0' }}>
                            <TextField {...register('price')}
                                       label={'Price'}
                                       InputLabelProps={{ shrink: !!editId || undefined }}/>
                            <TextField {...register('quantity')}
                                       label={'Quantity'}
                                       InputLabelProps={{ shrink: !!editId || undefined }}/>
                            <TextField {...register('brand')}
                                       label={'Brand'}
                                       InputLabelProps={{ shrink: !!editId || undefined }}/>
                        </Box>

                        <Controller
                            name="description"
                            control={control}
                            render={({ field: { value, onChange } }) => (
                                <DynamicQuill placeholder="Description" theme="snow" value={value} onChange={onChange}/>)}/>

                        <Button className={classes.btn} type="submit">Add product</Button>
                    </Box>
                </Box>
            </form>
        </Modal>
  )
}
