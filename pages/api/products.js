// eslint-disable-next-line import/extensions
import prisma from '../../lib/prisma'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  
  const products = await prisma.product.findMany({
    where: { productType: req.query.productType}
  })

  res.json(products)
}
