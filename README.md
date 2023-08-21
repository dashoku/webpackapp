# Components

The App component is the main component that uses BrowserRouter from the React Router DOM to control navigation. It imports the Nav, Home, About, Hobbies, and HobbiInfo components and displays them according to the defined routes.

The Home component displays images and text that welcomes the user to the home page. 
The Hobbies component displays a list of hobbies with their name and description, which can be deleted by clicking the delete button with the useState hook. You can also add hobbies by writing them in the required lines and after clicking on the "Add" button, the entered data will be displayed in the list of hobbies.

The About component displays a form with two input fields for name and email and a submit button. When the user submits the form, the handleSubmit function is called, which prevents the default form submission behavior and writes the form data to the console. The component also displays a table with two rows containing name and email address information. The table is created for a data entry example.

The component, HobbyInfo, displays a form for editing the name, description, and image of a hobby. It uses the useState hook to control the state of the hobby object. There are three input fields that update the corresponding properties of the hobby object when changed. The component also displays an image and description of the hobby.
