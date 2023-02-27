// eslint-disable-next-line import/extensions
import prisma from '../../lib/prisma'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const restaurants = await prisma.restaurant.findMany({
    orderBy: {
      name: 'asc',
    },
  })

  res.json(restaurants)
}
