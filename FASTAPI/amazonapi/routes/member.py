from fastapi import APIRouter, status, HTTPException
from pydantic import BaseModel, EmailStr
import bcrypt

from db import prisma

router = APIRouter()


class MemberSchema(BaseModel):
    name: str
    email: EmailStr
    password: str


class LoginSchema(BaseModel):
    email: EmailStr
    password: str


@router.post("/sign-up", status_code=status.HTTP_201_CREATED)
async def sign_up(payload: MemberSchema):
    existing = await prisma.member.find_unique(where={"email": payload.email})
    if existing:
        raise HTTPException(status_code=400, detail="Email already in use")

    hashed = bcrypt.hashpw(
        payload.password.encode("utf-8"), bcrypt.gensalt()
    ).decode("utf-8")

    async with prisma.tx() as tx:
        member = await tx.member.create(
            data={"name": payload.name, "email": payload.email}
        )
        await tx.member_password.create(
            data={"member_id": member.id, "password": hashed}
        )

    return member


@router.post("/login")
async def login(payload: LoginSchema):
    member = await prisma.member.find_unique(
        where={"email": payload.email},
        include={"member_password": True},
    )

    if not member or not member.member_password:
        raise HTTPException(status_code=401, detail="Invalid email or password")

    stored_hash = member.member_password.password.encode("utf-8")
    if not bcrypt.checkpw(payload.password.encode("utf-8"), stored_hash):
        raise HTTPException(status_code=401, detail="Invalid email or password")

    return {
        "message": "Login successful",
        "member": {"id": member.id, "name": member.name, "email": member.email},
    }