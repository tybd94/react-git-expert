import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GitExpertApp = () => {

    const [categories, setCategories2] = useState(["One Punch"]);

    const onAddCategory = (value) => {
        if (categories.includes(value)) return;
        setCategories2([value, ...categories]);
    };


    return (
        <>
            <h1>
                GitExpertApp
            </h1>

            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }
        </>
    )
}
