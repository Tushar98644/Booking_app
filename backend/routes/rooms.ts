const express = require('express');

const router = express.Router();

router.get('/',(_req: any,res: { send: (arg0: string) => void; })=>{
    res.send('Hello World');
}
);

// module.exports = router;
export default router;