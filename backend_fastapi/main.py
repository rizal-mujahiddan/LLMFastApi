from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import dotenv_values
from models.message_class import Message



config = dotenv_values(".env")  # config = {"USER": "foo", "EMAIL": "foo@example.org"}
print(config["WEBSITE_FRONTEND"])
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[config["WEBSITE_FRONTEND"]],  # Update with your frontend's address
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/")
async def real(message:Message):
    return message



@app.get("/items/{item_id}")
async def read_item(item_id: int):
    return {"item_id": item_id}
