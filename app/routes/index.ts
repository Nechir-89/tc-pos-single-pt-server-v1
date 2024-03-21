import { Router } from 'express';
// import employee_router from './employees_route';
// import returns_router from './returns_route';
// import borrows_router from './borrows_route';
// import items_router from './items_route';
// import cates_router from './cates_route';
// import warehouse_router from './warehouse_route';
// import added_amounts from './added_amounts'
import users_routes from './users_routes'
import auth_routes from './auth_routes'
import categories_routes from './categories_routes'
import units_routes from './units_routes'

const router = Router();

// router.use('/api/employees', employee_router);
// router.use('/api/returns', returns_router);
// router.use('/api/borrows', borrows_router);
// router.use('/api/items', items_router);
// router.use('/api/cates', cates_router);
// router.use('/api/warehouse', warehouse_router);
// router.use('/api/addedamounts', added_amounts);

router.use('/api/users', users_routes)
router.use('/auth', auth_routes)
router.use('/api/categories', categories_routes)
router.use('/api/units', units_routes)

export default router;
