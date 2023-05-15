import express from 'express'
import cors from 'cors'

const app=express();
const port =3000;

app.use(cors());
app.get("/",(req,res)=>{
    res.send([
        {
          "cursor": "ied1LKSNN192Zm03YXZqYmJqcTduYmZn",
          "service": {
            "id": "srv-chh0vfm7avjbbjq7nbfg",
            "autoDeploy": "yes",
            "branch": "main",
            "buildFilter": null,
            "createdAt": "2023-05-15T10:55:59.133034Z",
            "name": "ToDoListServer",
            "notifyOnFail": "default",
            "ownerId": "usr-chgd28bhp8u065r2dgng",
            "repo": "https://github.com/tehilabuy/ToDoList",
            "rootDir": "",
            "slug": "todolistserver-b8q7",
            "suspended": "not_suspended",
            "suspenders": [],
            "type": "web_service",
            "updatedAt": "2023-05-15T11:30:22.398826Z",
            "serviceDetails": {
              "disk": null,
              "env": "docker",
              "envSpecificDetails": {
                "dockerCommand": "",
                "dockerContext": ".",
                "dockerfilePath": "./Dockerfile"
              },
              "healthCheckPath": "",
              "numInstances": 1,
              "openPorts": null,
              "parentServer": null,
              "plan": "free",
              "pullRequestPreviewsEnabled": "no",
              "region": "singapore",
              "url": "https://todolistserver-b8q7.onrender.com"
            }
          }
        },
        {
          "cursor": "xFh3cQsIDQE3Zm03YXZqYmJqdm5ldmgw",
          "service": {
            "id": "srv-chge7fm7avjbbjvnevh0",
            "autoDeploy": "yes",
            "branch": "main",
            "buildFilter": null,
            "createdAt": "2023-05-14T13:35:59.176358Z",
            "name": "ToDoList-React",
            "notifyOnFail": "default",
            "ownerId": "usr-chgd28bhp8u065r2dgng",
            "repo": "https://github.com/tehilabuy/ToDoList-React",
            "rootDir": "",
            "slug": "todolist-react-yx7k",
            "suspended": "not_suspended",
            "suspenders": [],
            "type": "static_site",
            "updatedAt": "2023-05-15T11:32:14.3236Z",
            "serviceDetails": {
              "buildCommand": "npm run build",
              "parentServer": null,
              "publishPath": "build",
              "pullRequestPreviewsEnabled": "no",
              "url": "https://todolist-react-yx7k.onrender.com"
            }
          }
        }
      ])
})
app.listen(port,()=>{
    console.log(`Example run on http://localhost:${port}`);
})