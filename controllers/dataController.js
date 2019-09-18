var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class DataController {
    data(req, res) {
        console.log(req.body);
        console.log('funcionamiento');
        res.json({ text: 'hola' });
        //  res.json(db.collection('datosEncendedor').doc('81Y3vsbFVHhiiycMAVrS'));
        //   let observer = doc.onSnapshot((docSnapshot: any) => {          
        //     console.log(`Received doc snapshot: ${docSnapshot}`+docSnapshot.data().encendida);
        //       res.json({datas:observer});
        //   }, (err:any) => {
        //     console.log(`Encountered error: ${err}`);
        //   });
    }
    create(req, res) {
        console.log(req.body);
        database_1.default.collection("datosEncendedor").doc().set(req.body)
            .then(function () {
            console.log("Documento esctrito");
        })
            .catch(function (error) {
            console.error("Error escribiendo el documento: ", error);
        });
        res.json({ text: 'creating smoking data' });
    }
}
exports.dataController = new DataController();
