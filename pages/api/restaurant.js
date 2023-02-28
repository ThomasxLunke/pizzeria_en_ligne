// eslint-disable-next-line import/extensions
import prisma from '../../lib/prisma'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {

  if (req.query.id) {
    const restaurants = await prisma.restaurant.findUnique({
      where: { id: +req.query.id },
    })
    res.json(restaurants)
  } 
  
  
  else {
    const restaurants = await prisma.restaurant.findMany({
      orderBy: {
        name: 'asc',
      },
    })
    res.json(restaurants)
  }

  
}
