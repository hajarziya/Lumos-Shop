import { Card, CardContent, CardMedia, Divider, Typography } from '@mui/material'
import useStyles from './ProductItem.styles'
import EditNoteIcon from '@mui/icons-material/EditNote'

export function ProductItem () {
  const { classes } = useStyles()
  return (
        <>
            <Card className={classes.card}>
                <EditNoteIcon sx={{ margin: '5px' }}/>
                <CardMedia
                    component="img"
                    height="194"
                    image="/images/tree.webp"
                    alt="Paella dish"
                    className={classes.img}
                />
                <Divider sx={{ marginInline: '15px' }}/>
                <CardContent>
                    <Typography sx={{ lineHeight: '50px' }} fontWeight={'bold'} variant={'h6'}>Triple Whopper</Typography>
                    <Typography>The Football Is Good For Training And Recreational Purposes</Typography>
                    <Typography sx={{ lineHeight: '50px' }} color={'gray'}>#1</Typography>
                    <Typography fontWeight={'bold'} variant={'h5'}>$23.8</Typography>
                </CardContent>

            </Card>
        </>
  )
}
