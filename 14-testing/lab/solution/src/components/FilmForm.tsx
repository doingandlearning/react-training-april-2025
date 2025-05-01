import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useLibrary } from '../hooks/useLibrary';
import Film from '../film'; // Adjust the path based on your file structure

function FilmForm() {
	const { addFilm } = useLibrary();

	return (
		<Formik
			initialValues={{ name: '', genre: '', blurb: '' }}
			onSubmit={(values, { setSubmitting, resetForm }) => {
				const newFilm = new Film(values.name, values.genre, values.blurb);
				addFilm(newFilm)

				setSubmitting(false);
				resetForm();
			}}
		>
			{({ isSubmitting }) => (
				<Form>
					<div>
						<label htmlFor="name">Name:</label>
						<Field id="name" name="name" type="text" required />
					</div>
					<div>
						<label htmlFor="genre">Genre:</label>
						<Field id="genre" name="genre" type="text" required />
					</div>
					<div>
						<label htmlFor="blurb">Blurb:</label>
						<Field id="blurb" name="blurb" as="textarea" required />
					</div>
					<button type="submit" disabled={isSubmitting}>
						Add Film
					</button>
				</Form>
			)}
		</Formik>
	);
}

export default FilmForm;
