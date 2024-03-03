import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'


const CardCharacter = ({e}) => {

    let {image, name, status, gender, species} = e

  return (
         <Card sx={{ width: 350 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="170"
                    image={image}
                    alt="character"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Status: {status} <br/> Gender: {gender} <br/>  {species}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
  )
}

export default CardCharacter