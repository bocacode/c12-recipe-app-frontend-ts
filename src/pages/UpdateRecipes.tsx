import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function UpdateRecipe() {
    const nav = useNavigate()

    const handleFormSubmit = (e: any) => {
        e.preventDefault()
        const formData = {
            _id: e.target.id.value,
            title: e.target.title.value,
            description: e.target.description.value,
            steps: e.target.steps.value,
        }

        fetch(`http://localhost:8080/${formData._id}`)
            .then(res => res.json())
            .then(updatedRecipe => {
                return (
                    <>
                        <h2>{updatedRecipe}</h2>
                    </>
                )
            })
            .catch(console.error)
    }

    return (
        <>
            <h2>Update a recipe by ID: </h2>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicId">
                    <Form.Label>Recipe ID:</Form.Label>
                    <Form.Control type="text" placeholder="Recipe ID" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control type="text" placeholder="Recipe title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control type="text" placeholder="Recipe decription" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSteps">
                    <Form.Label>Steps:</Form.Label>
                    <Form.Control type="password" placeholder="Steps" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}