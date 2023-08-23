import express, {Application, Request, Response} from "express";
import bodyParser from "body-parser"
import cors from 'cors';

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// if you want anyone to be able to connect
app.use(cors({ origin: true }))

// if you want only your frontend running at port 3000 to connect to this backend
app.use(cors({ origin: "<http://localhost:3000>" }))


var fakeParam = {}

var Person = {
    name: "AVD",
    age: 25,
    college: "JC",
    work: "Rikkei"
}

app.get("/", (req: Request, res: Response) => {
    console.log(req?.query)
    res.send(req.query);
});

app.get("/wtf", (req: Request, res: Response) => {
    res.send("Healthy, YEAH")
})

app.get("/person", (req: Request, res: Response) => {
    res.send(Person)
}) 

app.get("/?age=3999", (req: Request, res: Response) => {
    res.send(req)
})
  
const PORT = process.env.PORT || 8000;
  
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
  