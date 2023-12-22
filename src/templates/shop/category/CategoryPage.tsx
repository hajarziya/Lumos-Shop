import { Appbar } from '@src/components/shop'
import { Box, Card, Typography, CardMedia, Divider, CardContent, Button, Stack, Link, ButtonBase } from '@mui/material'
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

  const { data: productsData } = useProducts({ page: 1, subcategory: selectedSubcategory ?? undefined })
  const products = useMemo(() => productsData?.data.data.products ?? [], [productsData])

  return (
        <>
            <Appbar />
            <Box className={classes.container}>
                <Typography variant={'h3'} sx={{ marginLeft: '30px', fontWeight: 'bold' }}>
                    {selectedCategory ? selectedCategory.name : 'Category Not Found'}
                </Typography>
                <Box className={classes.subcategoriWrapper}>
                    <Button className={classes.subcategoriCard}
                            color={selectedSubcategory === null ? 'secondary' : 'primary'} onClick={() => { setSelectedSubcategory(null) }}
                            sx={{ backgroundColor: (theme) => selectedSubcategory === null ? theme.palette.primary.main : theme.palette.secondary.main }}>
                           All
                    </Button>
                    {subCategories.map((subCategory) => (
                        <Button key={subCategory._id}
                                    className={classes.subcategoriCard}
                                    color={selectedSubcategory === subCategory._id ? 'secondary' : 'primary'} onClick={() => { setSelectedSubcategory(subCategory._id) }}
                                    sx={{ backgroundColor: (theme) => selectedSubcategory === subCategory._id ? theme.palette.primary.main : theme.palette.secondary.main }}>
                                {subCategory.name}
                        </Button>
                    ))}
                </Box>
                <Stack direction="row" justifyContent='start' >

                    {products.map((product) => (

                        <Card className={classes.card} key={product._id}>
                            <Link href={`/product/${product._id}`}>
                            <CardMedia
                                component="img"
                                height="194"
                                image={process.env.NEXT_PUBLIC_BASE_IMAGE_URL + product.images[0]}
                                alt="Product Image"
                                className={classes.img}
                            />
                            </Link>
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
