import {Router} from 'express';
import {dataController} from '../controllers/dataController';

class DataRoutes{
    
    public router: Router = Router();

    constructor(){
        this.config(); 
    }

    config(): void{
        this.router.get('/',dataController.data);
        this.router.post('/',dataController.create);
    }
}

const dataRoutes = new DataRoutes();
export default dataRoutes.router;