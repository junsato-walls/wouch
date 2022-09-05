from fastapi import APIRouter

router = APIRouter()

@router.get("users")
async def select_users():
    pass

@router.put("/users")
async def insert_users():
    pass

@router.post("/users")
async def update_users():
    pass