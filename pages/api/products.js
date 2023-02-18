import prisma from '../../lib/prisma'

export default async (req, res, user) => {
  
  const products = await prisma.product.findMany({
    where: { productType: req.query.productType}
  })

  res.json(products)
}
