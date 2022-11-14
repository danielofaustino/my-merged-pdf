import { Router } from 'express'

import { pdfRoutes } from './pdf.routes'
import { homeRoutes } from './home.routes'

const routers = Router()

routers.use("/mergePdf", pdfRoutes)

routers.use('/', homeRoutes)

export { routers }