import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    const onAddCategory = (newCategory) => {

        //categories.push(newCategory);

        if (categories.includes(newCategory)) return;
        //setCategories([ 'Valorant', ...categories ]);
        setCategories([newCategory, ...categories]);
        //setCategories(cat => [...cat, 'Valorant']);
    }


    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory                
                onNewCategory={value => onAddCategory(value)}
            ></AddCategory>

            {
                categories.map((category) => (
                    <GifGrid key={category} category={category}></GifGrid>
                ))
            }

        </>
    )
}

