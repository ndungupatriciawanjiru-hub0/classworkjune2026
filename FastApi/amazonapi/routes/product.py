from fastapi import APIRouter, status, HTTPException
from pydantic import BaseModel
from typing import Optional
from db import prisma

router = APIRouter()


class ProductSchema(BaseModel):
    name: str
    description: Optional[str] = None
    selling_price: float = 0.0
    buying_price: float = 0.0
    qty: int = 1


@router.post("/", status_code=status.HTTP_201_CREATED)
async def create_product(payload: ProductSchema):
    new_product = await prisma.product.create(data=payload.model_dump())
    return {"message": "New item added", "product": new_product}


@router.get("/")
async def get_products():
    return await prisma.product.find_many()


@router.get("/{product_id}")
async def get_product(product_id: int):
    product = await prisma.product.find_unique(where={"id": product_id})
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product


@router.put("/{product_id}")
async def update_product(product_id: int, payload: ProductSchema):
    product = await prisma.product.find_unique(where={"id": product_id})
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return await prisma.product.update(
        where={"id": product_id}, data=payload.model_dump()
    )


@router.delete("/{product_id}")
async def delete_product(product_id: int):
    product = await prisma.product.find_unique(where={"id": product_id})
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    await prisma.product.delete(where={"id": product_id})
    return {"message": "Product deleted"}