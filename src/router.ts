
/*
*       Artika API Server
*
*       Filename:   router.ts
*       Pathname:   ./router.ts
*       Language:   TypeScript
*       Content:    Main router for server
*
*       License:    GPL-2.0
*
*       Authors:
*       Simon From Jakobsen
*           Email:      simonfromjakobsen@gmail.com
*           GitHub:     SimonFJ20
*
*       Created:    23-02-2021
*       Last Edit:  23-02-2021
*/

import express from 'express'
import articles from './articles/articles';
import users from './users/users';

const router = express.Router();




router.use('/api/articles', articles);

router.use('/api/users', users);













export default router;