from fastapi import APIRouter, status, HTTPException
from pydantic import BaseModel, EmailStr
import bcrypt
from db import prisma

router = APIRouter()


class MemberSchema(BaseModel):
    name: str
    email: EmailStr
    password: str


@router.get("/")
async def list_members():
    return await prisma.member.find_many()


@router.post("/sign-up", status_code=status.HTTP_201_CREATED)
async def sign_up(payload: MemberSchema):
    existing = await prisma.member.find_unique(where={"email": payload.email})
    if existing:
        raise HTTPException(status_code=400, detail="Email already in use")

    hashed = bcrypt.hashpw(payload.password.encode(), bcrypt.gensalt()).decode()

    async with prisma.tx() as tx:
        member = await tx.member.create(
            data={"name": payload.name, "email": payload.email}
        )
        await tx.member_password.create(
            data={"member_id": member.id, "password": hashed}
        )

    return member

