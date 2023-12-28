import { Button, Stack, Typography, Link } from '@mui/material'

export function SuccessModal () {
  return (
      <Stack justifyContent={'center'} width={'50%'} sx={{ margin: '50px auto', textAlign: 'center', gap: '30px', alignItems: 'center' }}>
                <Typography variant={'h3'} fontWeight={'bold'} color={'green'}>Payment Successful! 🎉</Typography>
                <Typography fontWeight={'bold'}>Thank you for your purchase. Your transaction has been completed successfully. Your order is
                    now being processed, and you'll receive a confirmation email shortly. If you have any questions or
                    need further assistance, feel free to reach out. Happy shopping!
                </Typography>
          <Link href={'/'}>
          <Button sx={{
            backgroundColor: '#780000',
            color: '#f6f4ef',
            fontWeight: 'bold',
            padding: '10px 40px',
            width: '200px',
            '&:hover': {
              backgroundColor: '#2b2d42',
              color: '#f6f4ef'
            }
          }}
          >
              back
          </Button>
          </Link>
      </Stack>

  )
}

export function FailModal () {
  return (
         <Stack justifyContent={'center'} width={'50%'} sx={{ margin: '50px auto', textAlign: 'center', gap: '30px', alignItems: 'center' }}>
                <Typography variant={'h3'} fontWeight={'bold'} color={'#c1121f'}>Payment Failed 😞</Typography>
                <Typography fontWeight={'bold'}>We're sorry, but it seems there was an issue processing your payment. Please double-check
                    your payment details and try again. If the problem persists, you may want to use a different payment
                    method or contact your bank for assistance. If you have any questions or need support, feel free to
                    reach out to our customer service. We apologize for any inconvenience and appreciate your
                    understanding.

                </Typography>
             <Link href={'/'}>
             <Button sx={{
               backgroundColor: '#780000',
               color: '#f6f4ef',
               fontWeight: 'bold',
               padding: '10px 40px',
               width: '200px',
               '&:hover': {
                 backgroundColor: '#2b2d42',
                 color: '#f6f4ef'
               }
             }}
                 >
                 back
                 </Button>
             </Link>
            </Stack>
  )
}
