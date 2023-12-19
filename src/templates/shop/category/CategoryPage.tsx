import { Appbar } from '@src/components/shop'
import { Box, Card, Typography, CardMedia, Divider, CardContent, Button, Stack } from '@mui/material'
import { useCategories, useSubCategories, useProducts } from '@src/api' // Import useProducts hook
import React, { useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import useStyles from '@src/templates/shop/category/CategoryPage.styles'

export function CategoryPage () {
  const { classes } = useStyles()
  const router = useRouter()

  const { data: categoriesData } = useCategories({ page: 1 })

  const categories = useMemo(() => categoriesData?.data.data.categories ?? [], [categoriesData])
  const categoryId = router.query.id as string | undefined

  const selectedCategory = categories.find((category) => category._id === categoryId)

  const { data: subCategoriesData } = useSubCategories({ page: 1, category: categoryId })
  const subCategories = useMemo(() => subCategoriesData?.data.data.subcategories ?? [], [subCategoriesData])

  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null)

  const { data: productsData } = useProducts({ page: 1, subcategory: selectedSubcategory ?? '' })
  const products = useMemo(() => productsData?.data.data.products ?? [], [productsData])

  const handleSubcategoryClick = (subcategoryId: string) => {
    setSelectedSubcategory(subcategoryId)
  }

  return (
        <>
            <Appbar />
            <Box className={classes.container}>
                <Typography variant={'h3'} sx={{ marginLeft: '30px', fontWeight: 'bold' }}>
                    {selectedCategory ? selectedCategory.name : 'Category Not Found'}
                </Typography>
                <Box className={classes.subcategoriWrapper}>
                    {subCategories.map((subCategory) => (
                        <Card key={subCategory._id} className={classes.subcategoriCard}>
                            <Button onClick={() => { handleSubcategoryClick(subCategory._id) }}>
                                {subCategory.name}
                            </Button>
                        </Card>
                    ))}
                </Box>
                <Stack direction="row" gap={2}>
                    {products.map((product) => (
                        <Card className={classes.card} key={product._id}>
                            <CardMedia
                                component="img"
                                height="194"
                                image={process.env.NEXT_PUBLIC_BASE_IMAGE_URL + product.images[0]}
                                alt="Product Image"
                                className={classes.img}
                            />
                            <Divider sx={{ marginInline: '15px' }} />
                            <CardContent>
                                <Typography sx={{ lineHeight: '50px' }} fontWeight={'bold'} variant={'h6'}>
                                    {product.brand}
                                </Typography>
                                <Typography>{product.name}</Typography>
                                <Typography sx={{ lineHeight: '50px' }} color={'gray'}>
                                    {product.quantity}
                                </Typography>
                                <Typography fontWeight={'bold'} variant={'h5'}>
                                    ${product.price}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Stack>
            </Box>
        </>
  )
}
