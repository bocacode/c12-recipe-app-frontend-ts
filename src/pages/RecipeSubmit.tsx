import { useEffect, useState } from "react"

export default function RecipeSubmit() {
	const [recipes, setRecipes] = useState([])
	useEffect(() => {
		fetch('http://localhost:8080')
			.then((res) => res.json())
			.then((data) => setRecipes(data))
			.catch((err) => console.error)
	}, [])

	const handleFormSubmit = (e: any) => {
		e.preventDefault()
		const recipeData = {
			title: e.target.title.value,
			content: e.target.content.value
		}

		fetch('http://localhost:8080', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(recipeData),
		})
			.then(res => res.json())
			.then(cleanData => console.log(cleanData))
			.catch(err => console.error(err))

	}

	return (
		<>
			<form action='' onSubmit={(e) => handleFormSubmit(e)}>
				<label htmlFor="">
					<input type="text" name='title' id='' />
				</label>
				<label htmlFor="">
					<input type="text" name='content' id='' />
				</label>
				<button type="submit">Add Recipe</button>
			</form>
		</>


	)
}
